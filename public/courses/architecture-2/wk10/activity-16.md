# Worksheet: Understanding the Contents of Pipeline Stage Registers

## Background

This worksheet examines how instructions move through a pipelined MIPS processor. We'll track what values are stored in each pipeline stage register at each clock cycle as instructions flow through the pipeline.

### Pipeline Stages Overview

**Instruction Fetch (IF)** - Gets the instruction from memory
- IF/ID Register contains: $pc+4, 32-bit instruction

**Instruction Decode (ID)** - Decodes instruction and reads register values
- ID/EXE Register contains: $pc+4, J-type immediate, I-type immediate, values of Rs and Rt, addresses of Rd and Rt, control signals

**Execution (EXE)** - Performs ALU operations
- EXE/MEM Register contains: ALU result, value of Rt, addresses of Rd and Rt

**Memory (MEM)** - Accesses data memory
- MEM/WB Register contains: Data memory output, ALU result, addresses of Rd and Rt

**Write Back (WB)** - Writes results back to register file
- No output register (final stage)

## Instructions to Analyze

```
Address      Instruction
0x40004000   looptop: beq $t0 $a0 loopquit
0x40004004   lw $t1 ($a1)
0x40004008   lw $t2 ($a2)
0x4000400C   mul $t1 $t1 $t2
0x40004010   add $t3 $t3 $t1
0x40004014   addi $a1 $a1 4
0x40004018   addi $a2 $a2 4
0x4000401C   addi $t0 $t0 1
0x40004020   j looptop
0x40004024   loopquit: ...
```

## Pipeline Register Contents by Clock Cycle

### Clock Cycle 1

1. **IF/ID:**
   - $pc+4: 0x40004004
   - Instruction: beq $t0 $a0 loopquit
2. **ID/EXE:** Empty
3. **EXE/MEM:** Empty
4. **MEM/WB:** Empty

### Clock Cycle 2

1. **IF/ID:**
   - $pc+4: 0x40004008
   - Instruction: lw $t1 ($a1)
2. **ID/EXE:**
   - $pc+4: 0x40004004
   - J-type immediate: garbage (not J-type)
   - I-type immediate: 0x9 (branch offset)
   - Values: Contents of $t0 and $a0
   - Write target: garbage (branch doesn't write back)
3. **EXE/MEM:** Empty
4. **MEM/WB:** Empty

### Clock Cycle 3

1. **IF/ID:**
   - $pc+4: 0x4000400C
   - Instruction: lw $t2 ($a2)
2. **ID/EXE:**
   - $pc+4: 0x40004008
   - J-type immediate: garbage
   - I-type immediate: 0 (offset)
   - Values: Contents of $a1 and $t1
   - Write target: $t1
3. **EXE/MEM:**
   - ALU result: Comparison of $t0 and $a0
   - Value of Rt: Content of $a0
   - Write target: garbage (branch doesn't write back)
4. **MEM/WB:** Empty

### Clock Cycle 4

1. **IF/ID:**
   - $pc+4: 0x40004010
   - Instruction: mul $t1 $t1 $t2
2. **ID/EXE:**
   - $pc+4: 0x4000400C
   - J-type immediate: garbage
   - I-type immediate: 0 (offset)
   - Values: Contents of $a2 and $t2
   - Write target: $t2
3. **EXE/MEM:**
   - ALU result: Address calculation ($a1 + 0)
   - Value of Rt: Content of $t1
   - Write target: $t1
4. **MEM/WB:**
   - Data memory output: not used
   - ALU result: Comparison result
   - Write target: garbage (branch doesn't write back)

### Clock Cycle 5

1. **IF/ID:**
   - $pc+4: 0x40004014
   - Instruction: add $t3 $t3 $t1
2. **ID/EXE:**
   - $pc+4: 0x40004010
   - J-type immediate: garbage
   - I-type immediate: garbage (R-type)
   - Values: Contents of $t1 and $t2
   - Write target: $t1
3. **EXE/MEM:**
   - ALU result: Address calculation ($a2 + 0)
   - Value of Rt: Content of $t2
   - Write target: $t2
4. **MEM/WB:**
   - Data memory output: Value loaded from memory at address $a1
   - ALU result: Address calculation
   - Write target: $t1

### Clock Cycle 6

1. **IF/ID:**
   - $pc+4: 0x40004018
   - Instruction: addi $a1 $a1 4
2. **ID/EXE:**
   - $pc+4: 0x40004014
   - J-type immediate: garbage
   - I-type immediate: garbage (R-type)
   - Values: Contents of $t3 and $t1
   - Write target: $t3
3. **EXE/MEM:**
   - ALU result: Multiplication result ($t1 × $t2)
   - Value of Rt: Content of $t2
   - Write target: $t1
4. **MEM/WB:**
   - Data memory output: Value loaded from memory at address $a2
   - ALU result: Address calculation
   - Write target: $t2

### Clock Cycle 7

1. **IF/ID:**
   - $pc+4: 0x4000401C
   - Instruction: addi $a2 $a2 4
2. **ID/EXE:**
   - $pc+4: 0x40004018
   - J-type immediate: garbage
   - I-type immediate: 4
   - Values: Content of $a1
   - Write target: $a1
3. **EXE/MEM:**
   - ALU result: Addition result ($t3 + $t1)
   - Value of Rt: Content of $t1
   - Write target: $t3
4. **MEM/WB:**
   - Data memory output: not used
   - ALU result: Multiplication result
   - Write target: $t1

### Clock Cycle 8

1. **IF/ID:**
   - $pc+4: 0x40004020
   - Instruction: addi $t0 $t0 1
2. **ID/EXE:**
   - $pc+4: 0x4000401C
   - J-type immediate: garbage
   - I-type immediate: 4
   - Values: Content of $a2
   - Write target: $a2
3. **EXE/MEM:**
   - ALU result: Addition result ($a1 + 4)
   - Value of Rt: not used
   - Write target: $a1
4. **MEM/WB:**
   - Data memory output: not used
   - ALU result: Addition result ($t3 + $t1)
   - Write target: $t3

### Clock Cycle 9

1. **IF/ID:**
   - $pc+4: 0x40004024
   - Instruction: j looptop
2. **ID/EXE:**
   - $pc+4: 0x40004020
   - J-type immediate: garbage
   - I-type immediate: 1
   - Values: Content of $t0
   - Write target: $t0
3. **EXE/MEM:**
   - ALU result: Addition result ($a2 + 4)
   - Value of Rt: not used
   - Write target: $a2
4. **MEM/WB:**
   - Data memory output: not used
   - ALU result: Addition result ($a1 + 4)
   - Write target: $a1

### Clock Cycle 10

1. **IF/ID:**
   - $pc+4: 0x40004004
   - Instruction: beq $t0 $a0 loopquit (loop starts again)
2. **ID/EXE:**
   - $pc+4: 0x40004024
   - J-type immediate: 0x40004000 (jump target)
   - I-type immediate: garbage
   - Values: not used for J-type
   - Write target: garbage (J-type doesn't write back)
3. **EXE/MEM:**
   - ALU result: Addition result ($t0 + 1)
   - Value of Rt: not used
   - Write target: $t0
4. **MEM/WB:**
   - Data memory output: not used
   - ALU result: Addition result ($a2 + 4)
   - Write target: $a2

### Clock Cycle 11

1. **IF/ID:**
   - $pc+4: 0x40004008
   - Instruction: lw $t1 ($a1) (second iteration)
2. **ID/EXE:**
   - $pc+4: 0x40004004
   - J-type immediate: garbage
   - I-type immediate: 0x9 (branch offset)
   - Values: Contents of $t0 and $a0
   - Write target: garbage (branch doesn't write back)
3. **EXE/MEM:**
   - ALU result: not used for jump
   - Value of Rt: not used
   - Write target: garbage (J-type doesn't write back)
4. **MEM/WB:**
   - Data memory output: not used
   - ALU result: Addition result ($t0 + 1)
   - Write target: $t0

### Clock Cycle 12

1. **IF/ID:**
   - $pc+4: 0x4000400C
   - Instruction: lw $t2 ($a2)
2. **ID/EXE:**
   - $pc+4: 0x40004008
   - J-type immediate: garbage
   - I-type immediate: 0 (offset)
   - Values: Contents of $a1 and $t1
   - Write target: $t1
3. **EXE/MEM:**
   - ALU result: Comparison of $t0 and $a0
   - Value of Rt: Content of $a0
   - Write target: garbage (branch doesn't write back)
4. **MEM/WB:**
   - Data memory output: not used
   - ALU result: not used for jump
   - Write target: garbage (J-type doesn't write back)

## Notes

- This worksheet focuses only on what's stored in the pipeline registers at each clock cycle
- It doesn't address pipeline hazards (data or control)
- In a real processor, forwarding and stalling mechanisms would handle dependencies between instructions
