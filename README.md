# Advent of Code

These are all my solutions for the years of [Advent of Code](https://adventofcode.com) as well as a frontend for seeing my writeups and visualizations.

[Main Website](https://codingap.github.io/advent-of-code)

### How to Use Locally

Clone this repository on your computer, change directory to `/aoc` and run...

```bash
> deno task aoc
```

To use the repository, you need a `.env` in `/aoc` that has your token...

```
SESSION=YOUR_TOKEN_HERE
```

### How to Run

To see how it works, run `deno task aoc` to see all commands and arguments.

To generate the frontend, run `deno task generate <debug>` and `deno fmt`

### Note for AOC moderators

The automated requests are served from `aoc.ts`, where they have the a User-Agent header that points to this page. Nothing is done automatically, all done by a
function call by the built in command line tool or a call from another script. Also, there are no inputs stored on the GitHub repository
