let currentDay = new Date();

let options = {
    day: '' + currentDay.getDate(),
    year: '' + currentDay.getFullYear(),
    out: `${currentDay.getDate()}.in`,
    modified: false
};

const commandArgs = process.argv.slice(2);
for (let i = 0; i < commandArgs.length; i++) {
    let parts = commandArgs[i].split('=');
    options.modified = true;
    switch (parts[0]) {
        case '--day':
            options.day = parts[1];
            options.out = parts[1] + '.in';
            break;
        case '--year':
            options.year = parts[1];
            break;
    }
}

let part1 = require(`./years/${options.year}/day${options.day}/part1.js`);
let part2 = require(`./years/${options.year}/day${options.day}/part2.js`);
console.log(`Part 1: ${part1()}`);
console.log(`Part 2: ${part2()}`);