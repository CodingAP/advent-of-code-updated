// @ts-nocheck previous years was written in javascript, so disable it here

/**
 * puzzles/2023/day01/solution.ts
 * 
 * ~~ Trebuchet?! ~~
 * this is my solution for this advent of code puzzle
 * 
 * by alex prosser
 * 11/30/2023
 */

/**
 * code for part 1 of the advent of code puzzle
 * 
 * @param {string} input 
 * @returns {string | number} the result of part 1
 */
const part1 = input => {
    return input.split(/\r\n/g).reduce((sum, line) => {
        let nums = line.split('').filter(character => !isNaN(character));
        return sum + parseInt(nums[0] + nums[nums.length - 1]);
    }, 0);
}

/**
 * code for part 2 of the advent of code puzzle
 * 
 * @param {string} input 
 * @returns {string | number} the result of part 2
 */
const part2 = input => {
    const numbers = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    };

    return input.split(/\r\n/g).reduce((sum, line) => {
        let nums = [];
        for (let i = 0; i < line.length; i++) {

            Object.keys(numbers).forEach(num => {
                if (line.slice(i).startsWith(num)) nums.push(numbers[num]);
            });
            if (!isNaN(line[i])) nums.push(parseInt(line[i]));
        }
        return sum + nums[0] * 10 + nums[nums.length - 1];
    }, 0);
}

export { part1, part2 };