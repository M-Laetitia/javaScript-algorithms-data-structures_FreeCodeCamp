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
// Set taskData to the retrieval of data from local storage or an empty array.
const taskData = JSON.parse(localStorage.getItem("data")) || [];
// varable to be used to track the state when editing and discarding tasks.
let currentTask = {}

// get the values from the input fields, save them into the taskData array, and display them on the page.
const addOrUpdateTask = () => {
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

  // saved the task in the taskData array
  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  } else {
    taskData[dataArrIndex] = taskObj
  }
  localStorage.setItem("data", JSON.stringify(taskData))
  updateTaskContainer()
  reset()
};

const updateTaskContainer = () => {
  // clear out the existing contents of tasksContainer before adding a new task.
  tasksContainer.innerHTML = ""
  // display the task/s on the page
  taskData.forEach(({id, title, date, description}) => {
    (tasksContainer.innerHTML += `
      <div class="task" id="${id}">
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button type="button" class="btn" onclick="editTask(this)">Edit</button>
        <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
      </div>
    `)
  });
};

const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );
  // remove the task from the DOM using remove() 
  buttonEl.parentElement.remove();
  // and from the taskData array using splice().
  taskData.splice(dataArrIndex,1)
  localStorage.setItem("data", JSON.stringify(taskData))
}

const editTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  currentTask = taskData[dataArrIndex];

  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  addOrUpdateTaskBtn.innerText = "Update Task";

  taskForm.classList.toggle("hidden");  
  }

const reset = () => {
    addOrUpdateTaskBtn.innerText = "Add Task"
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
}

// check if there's a task inside taskData using the length of the array
if (taskData.length) {
  updateTaskContainer()
}

openTaskFormBtn.addEventListener("click", () =>
    taskForm.classList.toggle("hidden")
  );
  
  closeTaskFormBtn.addEventListener("click", () => {
    //  check if there is some text present in the input fields
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
    const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;

    if (formInputsContainValues && formInputValuesUpdated ) {
      confirmCloseDialog.showModal();
    } else {
      reset();
    }
  });

  cancelBtn.addEventListener("click", () => confirmCloseDialog.close());
  
  discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    // taskForm.classList.toggle("hidden");
    reset();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); // to stop the browser from refreshing the page after submitting the form.
  addOrUpdateTask();
});



// ^ Local storage
// tranform the array into string so it can be saved in localStorage
localStorage.setItem("data", JSON.stringify(myTaskArr));
const getTaskArr = localStorage.getItem("data")
console.log(getTaskArr)

// to get the data array again
const getTaskArrObj =JSON.parse(localStorage.getItem('data'))
console.log(getTaskArrObj)

