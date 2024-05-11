const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");


// array to store all the tasks along with their associated data
const taskData = []
// varable to be used to track the state when editing and discarding tasks.
let currentTask = {}

openTaskFormBtn.addEventListener("click", () =>
    taskForm.classList.toggle("hidden")
  );
  
  closeTaskFormBtn.addEventListener("click", () => {
    confirmCloseDialog.showModal();
  });
  
  cancelBtn.addEventListener("click", () => confirmCloseDialog.close());
  
  discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    taskForm.classList.toggle("hidden");
});

// get the values from the input fields, save them into the taskData array, and display them on the page.
taskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // to stop the browser from refreshing the page after submitting the form.
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id) // implicit return
    const taskObj = {
        // id: titleInput.value.toLowerCase().split(" ").join("-") // to get a final result with a hyphenated string.

        // add a unique number to the end of the id value to make it truly unique.
        id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        //add the remaining properties to the taskObj object.
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
    };
});

