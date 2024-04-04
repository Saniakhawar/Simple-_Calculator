
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000; // Dollar
let myPin = 1234;

// Starting message 
console.log(chalk.bold.blue.italic("\n\n\tWelcome to your ATM account!\t\n\n"));

    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your pin",
            type: "number"
        }
    ]);

    // Condition
    if (pinAnswer.pin === myPin) {
        console.log(chalk.bold.greenBright.italic("\n\n\tCorrect pin code!!! , Login Successfully!!\t\n\n"));

        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select an option",
                type: "list",
                choices: ["withdraw", "check balances", "Fast Cash"]
            }
        ]);

        // Withdraw
        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number",
                }
            ]);

            if (amountAns.amount > myBalance) {
                console.log(chalk.italic.red.bold("Sorry, your balance is insufficient for withdrawal from the account!"));
            } else {
                myBalance -= amountAns.amount;
                console.log(chalk.italic.blue.bold(`${amountAns.amount} withdrawn successfully`));
                console.log(chalk.italic.blue.bold("Your remaining balance is: " + myBalance));
            }
        } 
        // Check Balance
        else if (operationAns.operation === "check balances") {
            console.log(`Your Balance is: ${myBalance}`);
        }

        // FastCash
        else if (operationAns.operation === "Fast Cash") {
            let fastAmountAnswer = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Please select an amount",
                    type: "list",
                    choices: [
                        "500",
                        "1000",
                        "5000",
                        "7000"
                    ]
                }
            ]);
        
            // Deduct the selected amount from myBalance
           
            if (fastAmountAnswer.amount > myBalance) {
                console.log(chalk.italic.red.bold("Sorry, your balance is insufficient for this transaction!"));
            } else {
                myBalance -= fastAmountAnswer.amount;
                console.log(chalk.italic.blue.bold(`You have withdrawn ${fastAmountAnswer.amount} successfully`));
                console.log(chalk.italic.blue.bold("Your remaining balance is: " + myBalance));
            }
        }
    }

     else {
        console.log(chalk.bold.red.italic("Incorrect pin code!!! , Please Try again \n"));
    }
