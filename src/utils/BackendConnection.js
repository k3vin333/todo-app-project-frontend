//Handling backend connection to frontend

import axios from 'axios'; // Importing the Axios library for making HTTP requests

const baseUrl = "https://todo-app-project.onrender.com"; // Setting the base URL for the API

// Defining a function named getAllToDo that takes a function setToDo as a parameter
const getAllToDo = (setToDo) => {
    // Making a GET request to the base URL using Axios
    axios.get(baseUrl).then(({data}) => {
        // Logging the response data to the console
        console.log('data: ', data);
        // Calling the setToDo function with the response data to update the state
        setToDo(data);
    });
};

// text = text that has to be updated inside database
// setText, setToDo are from App.js
const addToDo = (text, setText, setToDo) => {
    // Make sure there is text
    if (!text.trim()) {
        console.error('Error: Text cannot be empty')
        return;
    }
    // Making a POST request to save the new todo with the provided text

    axios.post(`${baseUrl}/save`, { text }).then((data) => {
        // Logging the response data to the console
        console.log(data);
        // Clearing the input field by setting its value to an empty string
        setText("");
        // Refreshing the list of todos by fetching them again from the backend
        getAllToDo(setToDo);
    }).catch((error) => {
        // Logging any errors that occur during the POST request
        console.error('Error adding todo:', error);
    });
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    // Making a POST request to save the new todo with the provided text
    axios.post(`${baseUrl}/update`, { _id: toDoId, text: text }).then((data) => {
        // Logging the response data to the console
        setText("")
        setIsUpdating(false)
        // Refreshing the list of todos by fetching them again from the backend
        getAllToDo(setToDo);
    }).catch((error) => {
        // Logging any errors that occur during the POST request
        console.error('Error updating todo:', error);
    });
};

const deleteToDo = (_id, setToDo) => {
    // Making a POST request to save the new todo with the provided text
    axios.post(`${baseUrl}/delete`, { _id }).then((data) => {
        // Logging the response data to the console
        getAllToDo(setToDo);
    }).catch((error) => {
        // Logging any errors that occur during the POST request
        console.error('Error updating todo:', error);
    });
};



// Exporting the getAllToDo function to be used in other modules
export { getAllToDo, addToDo, updateToDo, deleteToDo };
