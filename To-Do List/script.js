console.log(firebase)

var input = document.querySelector("input");
var addButton = document.querySelector(".add-button");
var todosHtml = document.querySelector(".todos");
var emptyImage = document.querySelector(".empty-image");
var todosJson = JSON.parse(localStorage.getItem("todos")) || [];
var deleteAllButton = document.querySelector(".delete-all");
var filters = document.querySelectorAll(".filter");
var filter = '';

showTodos();

function getTodoHtml(todo, index) {
  if (filter && filter != todo.status) {
    return '';
  }
  var checked = todo.status === "completed" ? "checked" : "";
  return '<li class="todo">' +
    '<label for="' + index + '">' +
      '<input id="' + index + '" onclick="updateStatus(this)" type="checkbox" ' + checked + '>' +
      '<span class="' + checked + '">' + todo.name + '</span>' +
    '</label>' +
    '<button class="delete-btn" data-index="' + index + '" onclick="remove(this)"><i class="fa fa-times"></i></button>' +
  '</li>';
}

function showTodos() {
  if (todosJson.length === 0) {
    todosHtml.innerHTML = '';
    emptyImage.style.display = 'block';
  } else {
    todosHtml.innerHTML = todosJson.map(getTodoHtml).join('');
    emptyImage.style.display = 'none';
  }
}

function addTodo(todo) {
  input.value = "";
  todosJson.unshift({ name: todo, status: "pending" });
  localStorage.setItem("todos", JSON.stringify(todosJson));
  showTodos();
}

input.addEventListener("keyup", function (e) {
  var todo = input.value.trim();
  if (!todo || e.key !== "Enter") {
    return;
  }
  addTodo(todo);
});

addButton.addEventListener("click", function () {
  var todo = input.value.trim();
  if (!todo) {
    return;
  }
  addTodo(todo);
});

function updateStatus(todo) {
  var todoName = todo.parentElement.lastElementChild;
  if (todo.checked) {
    todoName.classList.add("checked");
    todosJson[todo.id].status = "completed";
  } else {
    todoName.classList.remove("checked");
    todosJson[todo.id].status = "pending";
  }
  localStorage.setItem("todos", JSON.stringify(todosJson));
}

function remove(todo) {
  var index = todo.dataset.index;
  todosJson.splice(index, 1);
  showTodos();
  localStorage.setItem("todos", JSON.stringify(todosJson));
}

Array.prototype.forEach.call(filters, function (el) {
  el.addEventListener("click", function (e) {
    if (el.classList.contains('active')) {
      el.classList.remove('active');
      filter = '';
    } else {
      Array.prototype.forEach.call(filters, function(tag) {
        tag.classList.remove('active');
      });
      el.classList.add('active');
      filter = e.target.dataset.filter;
    }
    showTodos();
  });
});

deleteAllButton.addEventListener("click", function () {
  todosJson = [];
  localStorage.setItem("todos", JSON.stringify(todosJson));
  showTodos();
});