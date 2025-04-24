# MIPS Processor Pipeline Quiz

## Question 1
**A MIPS instruction generally consists of five stages. Order the stages.**
1. Fetch instruction from memory. ✓ (1)
2. Read registers and decode the instruction. ✓ (2)
3. Execute the operation (ALU) ✓ (3)
4. Access data memory. ✓ (4)
5. Write result into a register. ✓ (5)

## Question 2
**Consider pipelining. Select the statement that is false.**
- It is more complicated.
- There is no false statement. ✓
- It achieves greater performance.
- It produces instruction level conflicts.

## Question 3
**One of the reasons you cannot achieve the ideal improvement through pipelining is that:**
- None of the answers are valid.
- There are too many chunks or stages.
- There are too few chunks or stages.
- The chunks or stages take different amounts of time. ✓

## Question 4
**The concept that it takes some time for the pipeline to become fully saturated and achieve better performance is called:**
- Start up effect ✓
- Wind down
- Preprocessing
- Wind up

## Question 5
**Instruction level conflicts or ________ happen when an instruction requires the result of an instruction that has not completed its path through the processor.**

Answer: **hazards** ✓

## Question 6
**Albert has to do three loads of laundry. He starts the first load of laundry, completes it entirely, and then begins the next load of laundry. This workflow is a type of pipelining.**
- True
- False ✓

## Question 7
**According to the videos, with pipelining, each instruction occupies only one chunk at a time.**
- True ✓
- False

## Question 8
**In the ideal case, the speedup with pipelining is equal the the number of stages in the pipeline divided by two.**
- True
- False ✓

## Question 9
**Pipelining breaks the processor up into a series of smaller chunks.**
- True ✓
- False

## Question 10
**Pipelining is a technique in which multiple instructions are overlapped in execution.**
- True ✓
- False

## Question 11
**Pipelining performs best when work in each stage is the same amount of time.**
- True ✓
- False

## Question 12
**The processor appears to run faster because the number of instructions per cc is decreased.**
- True
- False ✓

## Question 13
**A sequential processor (not pipelined) has 3 stages. Each stage takes 14 nanoseconds. How long will it take this pipeline to run 100 instructions in nanoseconds?**

Answer: **4200 nanoseconds** ✓

## Question 14
**A processor with pipelining has 7 stages. Each stage takes 14 nanoseconds. How long will it take this pipeline to run 4 instructions in nanoseconds?**

Answer: **140 nanoseconds** ✓

## Question 15
**A processor with pipelining has 3 stages. Each stage takes 12 nanoseconds. How long will it take this pipeline to run 4 instructions in nanoseconds?**

Answer: **72 nanoseconds** ✓

## Question 16
**A sequential processor (not pipelined) has 5 stages. Each stage takes 19 nanoseconds. How long will it take this pipeline to run 80 instructions in nanoseconds?**

Answer: **7600 nanoseconds** ✓

## Question 17
**A microprocessor has 17 chunks or stages. Each stage takes 12 nanoseconds. There are 70 instructions for the benchmark program. What is the ideal ratio of speed up due to pipelining?**

Answer: **17** ✓

## Question 18
**A microprocessor has 16 chunks or stages. Each stage takes 12 nanoseconds. There are 60 instructions for the benchmark program. What is the ideal ratio of speed up due to pipelining?**

Answer: **16** ✓

## Question 19
**A sequential processor (not pipelined) has 2 stages. Each stage takes 19 nanoseconds. How long will it take this pipeline to run 80 instructions in nanoseconds?**

Answer: **3040 nanoseconds** ✓

## Question 20
**A microprocessor has 14 chunks or stages. Each stage takes 10 nanoseconds. There are 80 instructions for the benchmark program. What is the ideal ratio of speed up due to pipelining?**

Answer: **14** ✓
