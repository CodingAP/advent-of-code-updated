import { join, resolve } from '@std/path';
import { getTitle, profilePuzzle, runPuzzle, submitAnswer, updatePuzzle } from './aoc.ts';

const year = '2017';

const baseDirectory = resolve('../puzzles');

const getComment = async (day: string, year: string) => {
    const title = await getTitle(day, year);

    return `// @ts-nocheck previous years was written in javascript, so disable it here

/**
 * puzzles/${year}/day${day}/solution.ts
 * 
 * ~~ ${title} ~~
 * this is my solution for this advent of code puzzle
 * 
 * by alex prosser
 * 11/24/2024
 */
`;
};

const part1Comment = `/**
 * code for part 1 of the advent of code puzzle
 * 
 * @param {string} input 
 * @returns {string | number} the result of part 1
 */
const part1 = input => {`;

const part2Comment = `/**
 * code for part 2 of the advent of code puzzle
 * 
 * @param {string} input 
 * @returns {string | number} the result of part 2
 */
const part2 = input => {`;

for (let i = 1; i <= 25; i++) {
    const solutionDirectory = join(baseDirectory, year, `day${i.toString().padStart(2, '0')}`);
    console.log('day', i, year);

    // await Deno.remove(join(solutionDirectory, 'README.md'));

    await updatePuzzle(i.toString(), year);
    const response = await runPuzzle(i.toString(), year, 'both');
    console.log(response.part1);
    console.log(response.part2);

    // await profilePuzzle(i.toString(), year, '1');
    // await submitAnswer(i.toString(), year, 'both', 'true');

    // let script = await Deno.readTextFile(join(solutionDirectory, 'solution.js'));
    // script = script.replace(/async /g, '');
    // script = script.replace(/const part1 = input => {/g, part1Comment);
    // script = script.replace(/const part2 = input => {/g, part2Comment);
    // const lines = script.replace(/\r/g, '').split('\n');
    // const commentLines = await getComment(i.toString(), year);

    // commentLines.split('\n').reverse().forEach(line => lines.unshift(line));

    // await Deno.writeTextFile(join(baseDirectory, year, `day${i.toString().padStart(2, '0')}`, 'solution.ts'), lines.join('\n'));
    // await Deno.remove(join(baseDirectory, year, `day${i.toString().padStart(2, '0')}`, 'solution.js'))
}
