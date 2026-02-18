const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let expenses = [];

function menu() {
  console.log("\n=== Expense Tracker ===");
  console.log("1. Add Expense");
  console.log("2. View Expenses");
  console.log("3. Total Expenses");
  console.log("4. Exit");

  rl.question("Choose option: ", handleMenu);
}

function handleMenu(option) {
  switch (option) {
    case "1":
      rl.question("Enter expense name: ", (name) => {
        rl.question("Enter amount: ", (amount) => {
          expenses.push({ name, amount: Number(amount) });
          console.log("Expense added!");
          menu();
        });
      });
      break;

    case "2":
      console.log("\nExpenses:");
      expenses.forEach((expense, index) => {
        console.log(`${index + 1}. ${expense.name} - $${expense.amount}`);
      });
      menu();
      break;

    case "3":
      const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
      console.log(`Total: $${total}`);
      menu();
      break;

    case "4":
      console.log("Bye!");
      rl.close();
      break;

    default:
      console.log("Invalid option");
      menu();
  }
}

menu();
