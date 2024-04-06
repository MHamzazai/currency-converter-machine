#! /usr/bin/env node

import inquirer from "inquirer";

// greeting the user 
console.log("Welcome ! To The Currency Converter Machine.With M.Hamza zai.");

const currency : any = {
    USD: 1, // base currency
    PKR: 277,
    IND: 83,
    Riyal: 3,
    Euro: 0.92,
}

let userAns = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Select Your Currency To Change Your Money From !.",
        choices: ["USD", "PKR", "IND", "Riyal", "Euro"],
    },
    {
        name: "to",
        type: "list",
        message: "Select Your Currency To Change Your Money Into !.",
        choices: ["USD", "PKR", "IND", "Riyal", "Euro"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount You Want To Change !.",
    }
]);

// the currency user select to change their money

let fromAmount = currency[userAns.from];

// the currency uer select to change heir money into

let toAmount = currency[userAns.to];

// the amount uer give

let amount = userAns.amount;

// converting the amount in our bae currency USD

let baseAmount = amount / fromAmount;

// extracting the amount in the curency user want

let convertedAmount = baseAmount * toAmount;

// printing the reult

console.log(`Ans = ${convertedAmount}.`,userAns.to);




 