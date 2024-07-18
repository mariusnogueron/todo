const textToAdd = document.querySelector(".addText");
const buttonAdd = document.querySelector(".add");
const newDiv = document.querySelector(".container");

if (textToAdd && buttonAdd && newDiv) {

    function saveTodos(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function loadTodos() {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    }

    function createTodoElement(text) {
        const newTodo = document.createElement("div");
        newTodo.classList.add("each-todo");

        const newElement = document.createElement("p");
        newElement.textContent = text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";

        deleteButton.addEventListener("click", () => {
            newTodo.remove();
            removeTodoFromStorage(text);
        });

        newTodo.appendChild(newElement);
        newTodo.appendChild(deleteButton);
        newDiv.appendChild(newTodo);
    }

    function createTodo(text) {
        createTodoElement(text);
        const todos = loadTodos();
        todos.push(text);
        saveTodos(todos);
    }

    function removeTodoFromStorage(text) {
        let todos = loadTodos();
        todos = todos.filter(todo => todo !== text);
        saveTodos(todos);
    }

    buttonAdd.addEventListener("click", () => {
        const text = textToAdd.value.trim();

        if (text.length < 1) {
            alert("Faut écrire sinon ça marche pas");
        } else {
            createTodo(text);
            textToAdd.value = "";
        }
    });

    // Charger les tâches depuis le localStorage au chargement de la page
    const todos = loadTodos();
    todos.forEach(todo => createTodoElement(todo));

} else {
    console.error("Les éléments nécessaires ne sont pas disponibles dans le DOM.");
}
