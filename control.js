/**
 * Retrieves the input field, list container, and add button elements.
 */
let input = document.querySelector("#enter");
let listContainer = document.querySelector(".list-container");
let add = document.querySelector("#add");

/**
 * Adds a new task to the list.
 *
 * If the input field is empty, an alert is displayed. Otherwise, a new list item
 * is created with the input value, and a delete span is appended to it.
 */
function addTask() {
    if (input.value === '') {
        alert("Work is empty");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    savedata();
}

/**
 * Adds an event listener to the add button to call the addTask function when clicked.
 */
add.addEventListener("click", () => {
    addTask();
});

/**
 * Adds an event listener to the list container to handle clicks on list items and delete spans.
 *
 * If a list item is clicked, its checked class is toggled. If a delete span is clicked, its parent
 * list item is removed.
 *
 * @example
 * // Assuming the list container has a list item with the text "Buy milk" and a delete span
 * // Clicking on the list item toggles its checked class
 * // Clicking on the delete span removes the list item
 */

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

/**
 * Saves the current list data to local storage.
 *
 * @example
 * // Assuming the list container has a list item with the text "Buy milk"
 * savedata();
 * // The list data is saved to local storage
 */

function savedata() {
    localStorage.setItem("data", listContainer.innerHTML);
}

/**
 * Retrieves the saved list data from local storage and updates the list container.
 *
 * @example
 * // Assuming the list data is saved in local storage
 * getdata();
 * // The list container is updated with the saved list data
 */
function getdata() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Initialize the list by retrieving saved data
getdata();