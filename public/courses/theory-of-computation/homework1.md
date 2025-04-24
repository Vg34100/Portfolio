# CMPS 3140 Theory of Computation Homework 1

Questions from Introduction to the Theory of Computer by Michael Sipser

## Chapter 1: 6, 8, 9, 10

### 1.6) Give state diagrams of DFAs recognizing the following languages. In all parts, the alphabet is {0,1}.

a) {w| w begins with a 1 and ends with a 0}

b) {w| w contains at least three 1s}

c) {w| w contains the substring 0101 (i.e., w = x0101y for some x and y)}

d) {w| w has length at least 3 and its third symbol is a 0}

e) {w| w starts with 0 and has odd length, or starts with 1 and has even length}

f) {w| w doesn't contain the substring 110}

g) {w| the length of w is at most 5}

h) {w| w is any string except 11 and 111}

i) {w| every odd position of w is a 1}

j) {w| w contains at least two 0s and at most one 1}

k) {ε, 0}

l) {w| w contains an even number of 0s, or contains exactly two 1s}

m) The empty set

n) All strings except the empty string

### 1.8) Use the construction in the proof of Theorem 1.45 (Closure under union operation) to give the state diagrams of NFAs recognizing the union of the languages described in:

a. Exercises 1.6a and 1.6b.
   {w| w begins with a 1 and ends with a 0} and {w| w contains at least three 1s}

b. Exercises 1.6c and 1.6f.
   {w| w contains the substring 0101 (i.e., w = x0101y for some x and y)} and {w| w doesn't contain the substring 110}

### 1.9) Use the construction in the proof of Theorem 1.47 (Closure under concatenation operation) to give the state diagrams of NFAs recognizing the concatenation of the languages described in:

a. Exercises 1.6g and 1.6i.
   {w| the length of w is at most 5} and {w| every odd position of w is a 1}

b. Exercises 1.6b and 1.6m.
   {w| w contains at least three 1s} and The empty set

### 1.10) Use the construction in the proof of Theorem 1.49 (Closure under star operation) to give the state diagrams of NFAs recognizing the star of the languages described in:

a. Exercise 1.6b.
   {w| w contains at least three 1s}

b. Exercise 1.6j.
   {w| w contains at least two 0s and at most one 1}

c. Exercise 1.6m.
   The empty set
