

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.blue(`\n\t\"Word Counter\"`));
console.log(chalk.magenta("*".repeat(40)));


const countWord: {
    sentence: string
}= await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Write your sentence to count the words."
    }

]);

// trimming the sentence and split it into a words, based on space.
let words = countWord.sentence.trim().split(" ").filter(words => words.length > 0);

// print the array of words.
console.log(chalk.yellow("Sentence Words:"));
console.log(words);

// print the word count of the sentence.
console.log(chalk.red("Words Count:"));
console.log(chalk.green(`Your sentence words count is: ${chalk.magenta(words.length)}.`));

