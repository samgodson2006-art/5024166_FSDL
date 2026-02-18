const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let todos = [];

function showMenu() {
  console.log("\n=== TO-DO APP ===");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Delete Task");
  console.log("4. Exit");

  rl.question("Choose an option: ", handleMenu);
}

function handleMenu(option) {
  switch (option) {
    case "1":
      rl.question("Enter task: ", (task) => {
        todos.push(task);
        console.log("Task added!");
        showMenu();
      });
      break;

    case "2":
      console.log("\nYour Tasks:");
      todos.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
      showMenu();
      break;

    case "3":
      rl.question("Enter task number to delete: ", (num) => {
        todos.splice(num - 1, 1);
        console.log("Task deleted!");
        showMenu();
      });
      break;

    case "4":
      console.log("Goodbye!");
      rl.close();
      break;

    default:
      console.log("Invalid option.");
      showMenu();
  }
}

showMenu();
