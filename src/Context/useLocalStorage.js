import React from "react";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    //ya tienen algunos 😎
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  //Puente entre el completeTodo, deleteTodo y localstorage
  const saveItem = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem(itemName, stringifiedTodos);
    setItem(newTodos);
  };

  return [item, saveItem];
}

export { useLocalStorage };
