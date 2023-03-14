import React from 'react'
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from './modal';
import {TodoForm} from "./components/TodoForm";

import { TodoContext } from './Context';


const AppUI = () => {
  const { searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />


      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}


      <CreateTodoButton setOpenModal={setOpenModal}/>
    </React.Fragment>
  )
}

export { AppUI }