#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import Choices from "inquirer/lib/objects/choices.js";

//chalkanimation.neon('Welcome to CLI Calculator');

const sleep = ()=> {
    return new Promise((resolve) => {
        setTimeout(resolve, 1500);
    })
}

async function Welcome() {
let rainbow = chalkanimation.rainbow('Welcome to CLI Calculator'); // Animation starts
await sleep();
rainbow.stop();


let calc = chalkanimation.rainbow(` 
_____________________
|  _________________  |
| | R=       3.1415 | |
| |_________________| | 
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`);

await sleep();
calc.stop();

console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
}

//

async function askQuestion(){
    await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"list",
        name:"operator",
        message:"Which operation you want to perform? \n",
        choices:["Addition","Subtraction","Multiplication","Division"]
    },
    {
        type:"number",
        name:"num1",
        message:"Enter number 1: "
    },
    {
        type:"number",
        name:"num2",
        message:"Enter number 2: "
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    if (answers.operator == "Addition") {
        console.log(`The Result of ${chalk.bgRed(answers.operator)} of Number: ${chalk.bgRed(answers.num1)} and Number: ${chalk.bgRed(answers.num2)} is ${chalk.bgRed(answers.num1+answers.num2)}`);
    } 
    else if (answers.operator == "Subtraction"){
        console.log(`The Result of ${chalk.greenBright(answers.operator)} of Number: ${chalk.greenBright(answers.num1)} and Number: ${chalk.greenBright(answers.num2)} is ${chalk.greenBright(answers.num1-answers.num2)}`);
    }
    else if (answers.operator == "Multiplication"){
        console.log(`The Result of ${chalk.bgYellow(answers.operator)} of Number: ${chalk.bgYellow(answers.num1)} and Number: ${chalk.bgYellow(answers.num2)} is ${chalk.bgYellow(answers.num1*answers.num2)}`);
    }
    else if (answers.operator == "Division"){
        console.log(`The Result of ${chalk.blueBright(answers.operator)} of Number: ${chalk.blueBright(answers.num1)} and Number: ${chalk.blueBright(answers.num2)} is ${chalk.blueBright(answers.num1/answers.num2)}`);
    }
  })
}



async function startAgain () {
    await Welcome();
   do{
    await askQuestion();
    var again = await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"input",
        name:"restart",
        message:"Do you want to perform another Operation? Press Y or N "
    }
  ])
   } while(again.restart == "y" || again.restart == "Y" || again.restart == "yes")
    
}

startAgain();