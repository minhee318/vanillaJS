const toDoForm = document.querySelector(".js-form"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList1 = document.querySelector(".js-todo1"),
  toDoList2 = document.querySelector(".js-todo2");

const PANDING = "panding";
const FINISHED = "finished";
let panding = [];
let finished = [];

function returnToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList2.removeChild(li);
  const cleanToDos3 = finished.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finished = cleanToDos3;
  saveToDo2();
  paintToDo(li.firstChild.innerText);
}

function delToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList1.removeChild(li);
  const cleanToDos = panding.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  panding = cleanToDos;
  saveToDo();
}

function delToDo2(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList2.removeChild(li);
  const cleanToDos = finished.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finished = cleanToDos;
  saveToDo2();
}

function checkToDO(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList1.removeChild(li);
  const cleanToDos2 = panding.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  paintToDo2(li.firstChild.innerText);
  panding = cleanToDos2;
  saveToDo();
}

function saveToDo() {
  localStorage.setItem(PANDING, JSON.stringify(panding));
}

function saveToDo2() {
  localStorage.setItem(FINISHED, JSON.stringify(finished));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  delBtn.innerText = "❌";
  checkBtn.innerText = "✔";
  delBtn.addEventListener("click", delToDo);
  checkBtn.addEventListener("click", checkToDO);
  const span = document.createElement("span");
  const newId = panding.length + 1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newId;
  toDoList1.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  panding.push(toDoObj);
  saveToDo();
}

function paintToDo2(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const returnBtn = document.createElement("button");
  delBtn.innerText = "❌";
  returnBtn.innerText = "⏪";
  delBtn.addEventListener("click", delToDo2);
  returnBtn.addEventListener("click", returnToDo);
  const span = document.createElement("span");
  const newId = finished.length + 1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(returnBtn);
  li.id = newId;
  toDoList2.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  finished.push(toDoObj);
  saveToDo2();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(PANDING);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function loadToDos2() {
  const loadedToDos2 = localStorage.getItem(FINISHED);
  if (loadedToDos2 !== null) {
    const parsedToDos2 = JSON.parse(loadedToDos2);
    parsedToDos2.forEach(function(toDo) {
      paintToDo2(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  loadToDos2();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
