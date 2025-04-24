# MIPS Processor Pipeline Quiz

## Question 1
**Consider a load word operation for a MIPS microprocessor. The result of the MEM stage is the:**
- No answer is correct
- Memory address plus offset
- Dereferenced memory location ✓
- Pointer plus offset

## Question 2
**The source register of an instruction is a write target of an instruction in the previous clock cycle. This is a type of hazard.**
- True ✓
- False

## Question 3
**What term is used to describe the technique of inserting stalls in a pipeline?**
- Bubble insertion ✓
- Branch prediction
- Instruction scheduling
- Cache coherence

## Question 4
**Consider a load word operation for a MIPS microprocessor. The result of the ID stage is the:**
- Pointer plus offset
- Memory address plus offset
- No answer is correct ✓
- Dereferenced memory location

## Question 5
**From the video, the ____ operation can be used to implement a stall.**
- Noop ✓

## Question 6
**Consider a store word operation for a MIPS microprocessor. The result of the ALU is the:**
- Pointer of the store target ✓
- Value of the store target
- Branch offset
- No answer is correct

## Question 7
**Which instructions can cause a data hazard?**
- add
- j
- lw
- beq
- Add, lw ✓

## Question 8
**Consider this code snippet:
Line 1: lw $sp ($t9)
Line 2: lw $sp ($sp)
Line 3: add $sp $sp $sp
Line 4: sw $sp ($sp)
How many stalls will need to be inserted between lines 2 and 3 to make sure line 3 does not have a hazard?**
- 2 stalls ✓

## Question 9
**Consider a load word operation for a MIPS microprocessor. Consider the IF stage. What is known about the instruction?**
- The base pointer
- The memory location to load
- Nothing ✓
- It is a load word operation

## Question 10
**With the following instruction: beq $t0 $t1 tacos
Which registers are destinations/targets?**
- tacos
- $t0
- $t1
- None are correct ✓

## Question 11
**A ____ hazard is a type of hazard where the result of the ALU or memory has not yet been written back to the register file.**
- Data ✓

## Question 12
**With the following instruction: add $sp $t1 $t0
Which registers are source registers?**
- $t1 ✓
- $t0 ✓
- None are correct
- $sp

## Question 13
**Consider this code snippet:
lw $s5 ($s4)
lw $s6 ($s7)
add $s6 $s6 $s5
sw $s6 ($s7)
If stalls were inserted to avoid hazards, how many clock cycles will it take for this code to complete?**
- 12 ✓

## Question 14
**Consider a load word operation for a MIPS microprocessor. The result of the ALU is the:**
- Branch offset
- No answer is correct
- Pointer to the load target ✓
- Value of the load target

## Question 15
**With the following instruction: sw $s5 -32($t3)
Which registers are source registers?**
- -32
- $t3 ✓
- $s5 ✓
- None are correct

## Question 16
**With the following instruction: add $t0 $t1 $t2
Which registers are destinations/targets?**
- None are correct
- $t1
- $t2
- $t0 ✓

## Question 17
**Consider this code snippet:
Line 1: lw $a1 ($a0)
Line 2: lw $a2 ($a3)
Line 3: add $a2 $a2 $a1
Line 4: sw $a2 ($a3)
How many stalls will need to be inserted between lines 2 and 3 to make sure line 3 does not have a hazard?**
- 2 stalls ✓

## Question 18
**What is the primary drawback of using pipeline stalls to resolve data hazards?**
- It leads to a decrease in the overall instruction throughput ✓
- It is ineffective in resolving most types of hazards
- It requires additional hardware resources
- It increases the clock frequency of the processor

## Question 19
**Consider this code snippet:
lw $s1 ($s0)
lw $s2 ($s3)
add $s2 $s2 $s1
sw $s2 ($s3)
If stalls were inserted to avoid hazards, how many clock cycles will it take for this code to complete?**
- 12 ✓

## Question 20
**With the following instruction: lw $s5 -32($t3)
Which registers are destinations/targets?**
- $s5 ✓
- -32
- $t3
- None are correct

## Question 21
**Consider a load word operation for a MIPS microprocessor. The result of the WB stage is the:**
- Pointer plus offset
- Memory address plus offset
- Dereferenced memory location ✓
- No answer is correct

## Question 22
**With the following instruction: slti $s3 $t1 1000
Which registers are source registers?**
- 1000
- $s3
- $t1 ✓
- None are correct

## Question 23
**When the processor ____, it performs no action for that pipeline stage.**
- Stalls ✓

## Question 24
**Consider this code snippet:
addi $t8 $0 18
addi $t8 $0 8
addi $t8 $0 15
add $t8 $t8 $t8
What is the final value of $t8 if there is no forwarding unit, or stalls inserted in the code?**
- 30 ✓

## Question 25
**Which of the following best describes a data hazard in computer architecture?**
- A situation where an instruction depends on the result of a previous instruction that has not yet been computed ✓
- An error in the data cache that leads to corrupted data retrieval
- A type of branch misprediction that results in incorrect program flow
- A condition where the instruction stream is stalled due to control dependencies
