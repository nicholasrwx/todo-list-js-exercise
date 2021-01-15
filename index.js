//each function now accepts a task object
//instead of an array index.
//we are also passing the task object
//to the functions so they're not dependent on variables
//outside their own scope.
//independent and portable functions
//reduces risk of accidental modification

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(
        `${task.title} has${task.complete ? " " : " not "}been completed`
      );
    },

    markCompleted: function () {
      this.complete = true;
    },
  };

  return task;
}

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
