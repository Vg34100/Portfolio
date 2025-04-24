# MIPS Processor Pipeline Quiz

## Question 1
**Select all components contained in the instruction decode stage.**
- Data memory
- Register file ✓
- Instruction memory
- Control ✓

## Question 2
**Select all fields that are contained in the pipeline stage register between the instruction decode and ALU stage.**
- RS value (read value 1) ✓
- Immediate field for J-type operations
- Immediate field for I-type operations ✓
- RT value (read value 2) ✓

## Question 3
**The pipeline state register between the instruction fetch and instruction decode stages contains what data? Select all that apply.**
- The whole instruction ✓
- Zero control line
- PC+4 ✓
- ALU result

## Question 4
**How many clock cycles does each pipeline stage take?**
- 1 clock cycle ✓
- 2 clock cycles
- 4 clock cycles
- Depends on the instruction

## Question 5
**A _____ is placed between each stage of the microprocessor.**
- Pipeline stage register ✓
- Buffer gate
- Multiplexer
- Control unit

## Question 6
**The _____ memory is slow and can be outpaced by the ALU.**
- Data ✓
- Instruction
- Cache
- Register

## Question 7
**The instruction decode stage will finish its job on the rising edge. Its pipeline stage register should trigger on the _____ edge.**
- Falling ✓
- Rising
- Both
- Neither

## Question 8
**The instruction memory will finish its job on the rising edge. Its pipeline stage register should trigger on the _____ edge.**
- Falling ✓
- Rising
- Both
- Neither

## Question 9
**The pipeline stage register between the instruction decode and ALU stage is called the ID/_____ register.**
- EX ✓
- MEM
- WB
- ALU

## Question 10
**The pipeline stage register between the instruction fetch and instruction decode stage is called the _____/ID register.**
- IF ✓
- EX
- MEM
- WB

## Question 11
**The pipeline stage register between the ALU stage and the memory stage is called the _____/MEM register.**
- EX ✓
- IF
- ID
- WB

## Question 12
**The pipeline stage register between the memory stage and the write-back stage is called the MEM/_____ register.**
- WB ✓
- IF
- ID
- EX

## Question 13
**The pipeline stage registers are contained in the general register file.**
- True
- False ✓
