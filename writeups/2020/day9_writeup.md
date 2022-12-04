# Advent of Code 2020 - Day 9: [Encoding Error](https://adventofcode.com/2020/day/9)
By Alex Prosser

In this puzzle, we are trying to "decoded" some port data, even though we don't actually do some decoding, we just find a number that is somehow an encryption weakness. For part 1, we need to find a number that doesn't have a sum of two numbers in the previous 25 numbers. Using a shifting array, we can find the two numbers that add up to the 26th number. If not, then that is the number we return. For part 2, we need to find consecutive numbers (2 or more because if we look for 1 value, it will just return the value we already found) that add up to the number we found in part 1. We just increase the size variable, add up each subarray until that number is found. 