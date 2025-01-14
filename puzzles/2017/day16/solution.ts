// @ts-nocheck previous years was written in javascript, so disable it here

/**
 * puzzles/2017/day16/solution.ts
 *
 * ~~ Permutation Promenade ~~
 * this is my solution for this advent of code puzzle
 *
 * by alex prosser
 * 11/26/2024
 */

/**
 * the code of part 1 of the puzzle
 */
const part1 = (input: string) => {
    let program = 'abcdefghijklmnop'.split('');

    input.split(',').forEach(element => {
        let instruction = element.slice(0, 1);
        switch (instruction) {
            case 's':
                for (let i = 0; i < parseInt(element.slice(1)); i++) program.unshift(program.pop());
                break;
            case 'x':
                let [position1, position2] = element.slice(1).split('/').map(num => parseInt(num));
                let character = program[position1];
                program[position1] = program[position2];
                program[position2] = character;
                break;
            case 'p':
                let [character1, character2] = element.slice(1).split('/').map(character => program.indexOf(character));
                let temp = program[character1];
                program[character1] = program[character2];
                program[character2] = temp;
                break;
        }
    });
    return program.join('');
};

/**
 * the code of part 2 of the puzzle
 */
const part2 = (input: string) => {
    let program = 'abcdefghijklmnop'.split('');
    let previous = ['abcdefghijklmnop'];

    while (true) {
        input.split(',').forEach(element => {
            let instruction = element.slice(0, 1);
            switch (instruction) {
                case 's':
                    for (let i = 0; i < parseInt(element.slice(1)); i++) program.unshift(program.pop());
                    break;
                case 'x':
                    let [position1, position2] = element.slice(1).split('/').map(num => parseInt(num));
                    let character = program[position1];
                    program[position1] = program[position2];
                    program[position2] = character;
                    break;
                case 'p':
                    let [character1, character2] = element.slice(1).split('/').map(character => program.indexOf(character));
                    let temp = program[character1];
                    program[character1] = program[character2];
                    program[character2] = temp;
                    break;
            }
        });
        if (previous.includes(program.join(''))) break;
        else previous.push(program.join(''));
    };

    return previous[1000000000 % previous.length];
};

export { part1, part2 };
