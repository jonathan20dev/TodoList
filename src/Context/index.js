import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const [openModal, setOpenModal] = React.useState(false)
    const [ todos,saveTodos ] = useLocalStorage("TODOS_V1", []);
    const [search, setSearch] = React.useState("");

    const completedTodos = todos.filter((todo) => todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!search.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = search.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    // Función para añadir un nuevo TODO
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const updateTodos = todos.filter((todo) => todo.text !== text);
        saveTodos(updateTodos);
    };

    return (
        <TodoContext.Provider value={{
            search ,
            setSearch ,
            completedTodos,
            totalTodos,
            searchedTodos ,
            completeTodo ,
            deleteTodo,
            openModal, 
            setOpenModal,
            addTodo
        }}>{props.children}</TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}