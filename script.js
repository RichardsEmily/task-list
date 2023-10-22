const input = document.querySelector("input");
const listContainer = document.getElementById("list-container");

function clearInput() {
  input.value = "";
}

function addTask() {
  if (input.value === "") {
    alert("Please type the task you wish to add");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
    clearInput();
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      listContainer.appendChild(e.target);
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();
