function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return a / b;
}



// eslint-disable-next-line no-unused-vars
function calculate() {
  const input1 = document.getElementById("input1").value;
  if (!Number(input1)) {
    alert("Error: Input 1 is not a number.");
    return;
  }
  const input2 = document.getElementById("input2").value;
  if (!Number(input2)) {
    alert("Error: Input 2 is not a number.");
    return;
  }
  const operator = document.getElementById("operator").value;

  let result;
  switch (operator) {
    case "+":
      result = add(Number(input1), Number(input2));
      break;
    case "-":
      result = subtract(Number(input1), Number(input2));
      break;
    case "*":
      result = multiply(Number(input1), Number(input2));
      break;
    case "/":
      result = divide(Number(input1), Number(input2));
      break;
    default:
      result = "Error: Invalid operator.";
  }

  document.getElementById("result").value = result;
}

const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

// eslint-disable-next-line no-unused-vars
function addTask() {
  const input = document.getElementById("todo-input");
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const newTask = {
    text: taskText,
    completed: false,
  };

  todoList.push(newTask);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  input.value = "";
  renderTask();
}

function renderTask() {
  const todoItems = document.getElementById("todo-items");
  todoItems.innerHTML = "";

  todoList.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    const buttonComplete = document.createElement("button");
    buttonComplete.textContent = "Complete";
    buttonComplete.className = "complete-btn";
    buttonComplete.onclick = (event) => {
      event.stopPropagation();
      task.completed = !task.completed;
      li.classList.toggle("completed");
      localStorage.setItem("todoList", JSON.stringify(todoList));
      renderTask();
    };

    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "✏️";
    buttonEdit.className = "edit-btn";
    buttonEdit.onclick = (event) => {
      event.stopPropagation();
      const newTaskText = prompt("Edit task:", task.text);
      if (newTaskText !== null) {
        task.text = newTaskText;
        localStorage.setItem("todoList", JSON.stringify(todoList));
        renderTask();
      }
    };

    const buttonDelete = document.createElement("button");
    buttonDelete.textContent = "❌";
    buttonDelete.className = "delete-btn";
    buttonDelete.onclick = (event) => {
      event.stopPropagation();
      todoList.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(todoList));
      renderTask();
    };

    todoItems.appendChild(li);
    li.appendChild(buttonComplete);
    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);
  });
}


// eslint-disable-next-line no-unused-vars
async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "520147c8be420b7f3c9e650dbc4dc44f";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  const data = await response.json();
  if (data.cod !== 200) {
    document.getElementById("weather-result").innerText = "City not found!";
    return;
  }

  const weatherInfo = `
    City: ${data.name} <br>
    Temp: ${data.main.temp}°C <br>
    Weather: ${data.weather[0].description}
  `;
  document.getElementById("weather-result").innerHTML = weatherInfo;
}

renderTask();
