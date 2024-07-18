// Sélectionner les éléments nécessaires
const textToAdd = document.querySelector(".addText");
const buttonAdd = document.querySelector(".add");
const newDiv = document.querySelector(".container");

// Vérifier si les éléments existent avant d'ajouter des écouteurs d'événements
if (textToAdd && buttonAdd && newDiv) {

    // Fonction pour créer et ajouter un nouvel élément todo
    function createTodo(text) {
        const newTodo = document.createElement("div");
        newTodo.classList.add("each-todo");

        const newElement = document.createElement("p");
        newElement.textContent = text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";

        const editButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";

        // Attacher un écouteur d'événement pour le bouton de suppression
        deleteButton.addEventListener("click", () => {
            newTodo.remove();
        });

        newTodo.appendChild(newElement);
        newTodo.appendChild(deleteButton);
        newDiv.appendChild(newTodo);
    };

    // Ajouter un écouteur d'événements pour le bouton "Ajouter"
    buttonAdd.addEventListener("click", () => {
        const text = textToAdd.value.trim();

        // Vérifier si le texte n'est pas vide
        if (text.length < 1) {
            console.log("AJOUTE");
            alert("Veuillez entrer un texte.");
        } else {
            createTodo(text);
            textToAdd.value = ""; // Réinitialiser le champ de saisie
        }
    });
} else {
    console.error("Les éléments nécessaires ne sont pas disponibles dans le DOM.");
}
