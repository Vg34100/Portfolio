# Introduction to Pipelining - Completed Activity

## IDOT Algorithm Implementation

The IDOT (Inner Dot Product) algorithm calculates the dot product of two arrays:

```
Input : An integer n,
        an integer array x of length n,
        an integer array y of length n
Output: An integer sum

i ← 0
sum ← 0
for i < n do
    sum ← sum + x[i] × y[i]
    i ← i + 1
end
```

### MIPS Implementation

```assembly
# Register usage:
# $a0 = address of array x
# $a1 = address of array y
# $a2 = n (number of elements)
# $t0 = i (loop counter)
# $t1 = x[i] (temporary)
# $t2 = y[i] (temporary)
# $t3 = x[i] * y[i] (temporary product)
# $s0 = sum (accumulator)
# $t5 = current address in x array
# $t6 = current address in y array

# Initialize
addi $t0, $zero, 0    # i = 0
addi $s0, $zero, 0    # sum = 0
add $t5, $a0, $zero   # $t5 = address of x[0]
add $t6, $a1, $zero   # $t6 = address of y[0]

loop:
    bge $t0, $a2, done    # if (i >= n) goto done

    # Load x[i] and y[i] directly from pointers
    lw $t1, 0($t5)        # $t1 = x[i]
    lw $t2, 0($t6)        # $t2 = y[i]

    # Perform dot product calculation
    mul $t3, $t1, $t2     # $t3 = x[i] * y[i]
    add $s0, $s0, $t3     # sum = sum + x[i] * y[i]

    # Increment loop counter and pointers
    addi $t0, $t0, 1      # i = i + 1
    addi $t5, $t5, 4      # move to next element in x (4 bytes per word)
    addi $t6, $t6, 4      # move to next element in y (4 bytes per word)
    j loop                # goto loop

done:
    # Result in $s0
```

## Question 2: Single-Cycle Datapath (Non-pipelined)

In a single-cycle datapath, each instruction completes all five stages before the next begins.

Timeline for one iteration (9 instructions):

```
Clock cycle  0→→→5→→→→10→→→→15→→→→20→→→→25→→→→30→→→→35→→→→40→→→→45
bge $t0,$a2  IF→WB------------------------------------------------
lw $t1,0($t5)      IF→WB------------------------------------------
lw $t2,0($t6)            IF→WB------------------------------------
mul $t3,$t1,$t2                IF→WB------------------------------
add $s0,$s0,$t3                      IF→WB------------------------
addi $t0,$t0,1                             IF→WB------------------
addi $t5,$t5,4                                   IF→WB------------
addi $t6,$t6,4                                         IF→WB------
j loop                                                       IF→WB
```

- Each instruction: 5 cycles
- Total per iteration: 9 instructions × 5 cycles = 45 cycles
- Time per iteration: 45 cycles × 20ms = 900ms
- Total for n=3: 3 × 900ms = 2,700ms
- With initialization (4 instructions): 2,700ms + 400ms = 3,100ms (3.1 seconds)

## Question 3: Pipelined Datapath (Ideal Case)

In an ideal pipelined architecture, instructions overlap execution:

```
Clock cycle    00→01→02→03→04→05→06→07→08→09→10→11→12
bge $t0,$a2    IF→ID→EX→ME→WB------------------------
lw $t1,0($t5)     IF→ID→EX→ME→WB---------------------
lw $t2,0($t6)        IF→ID→EX→ME→WB------------------
mul $t3,$t1,$t2         IF→ID→EX→ME→WB---------------
add $s0,$s0,$t3            IF→ID→EX→ME→WB------------
addi $t0,$t0,1                IF→ID→EX→ME→WB---------
addi $t5,$t5,4                   IF→ID→EX→ME→WB------
addi $t6,$t6,4                      IF→ID→EX→ME→WB---
j loop                                 IF→ID→EX→ME→WB
```

- First iteration: 13 cycles
- Each additional iteration: 9 cycles
- Total for n=3: 13 + (2 × 9) = 31 cycles
- Time for n=3: 31 cycles × 20ms = 620ms
- With initialization: 620ms + 160ms = 780ms (0.78 seconds)

## Question 4: Pipelined Datapath with Hazards

With hazards, we must account for data and control dependencies:

```
Clock cycle    00→01→02→03→04→05→06→07→08→09→10→11→12→13→14→15→16→17→18→19→20→21→22→23→24
bge $t0,$a2    IF→ID→EX→ME→WB------------------------------------------------------------
lw $t1,0($t5)  ---------------IF→ID→EX→ME→WB    # Wait for branch
lw $t2,0($t6)  ------------------IF→ID→EX→ME→WB------------------------------------------
mul $t3,$t1,$t2---------------------------------IF→ID→EX→ME→WB    # Wait for loads
add $s0,$s0,$t3------------------------------------------------IF→ID→EX→ME→WB # Wait for mul
addi $t0,$t0,1 ---------------------------------------------------IF→ID→EX→ME→WB---------
addi $t5,$t5,4 ------------------------------------------------------IF→ID→EX→ME→WB------
addi $t6,$t6,4 ---------------------------------------------------------IF→ID→EX→ME→WB---
j loop         ------------------------------------------------------------IF→ID→EX→ME→WB
```

- Each iteration with hazards: 25 cycles
- Total for n=3: 3 × 25 = 75 cycles
- Time for n=3: 75 cycles × 20ms = 1,500ms
- With initialization: 1,500ms + 160ms = 1,660ms (1.66 seconds)

## Summary

| Architecture           | Time (ms) | Speedup |
|------------------------|-----------|---------|
| Single-cycle           | 3,100     | 1.0×    |
| Ideal pipeline         | 780       | 4.0×    |
| Pipeline with hazards  | 1,660     | 1.9×    |

Even with hazards, pipelining still offers a significant performance improvement over the single-cycle architecture. This demonstrates why pipelining is a fundamental technique in modern processor design.
