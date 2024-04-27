#!usr/bin/env node


import inquirer from "inquirer";

console.log("wellcom to code with muzamil - cli number guessing game");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name:"usergassingnumber",
        type:"number",
        message:"Enter Your guess number(number limit from 1 to 5)",
    },
]);
if(answer.usergassingnumber === randomNumber)
    {
        console.log("congratulation ! you guess a correct number");
    }
    else{
        console.log("sorry ! you a guess aworng number")
    }