import React from "react";
import { TodoContext } from '../Context/index';
import "../css/TodoForm.css"

const TodoForm = () => {
  const {addTodo, setOpenModal} = React.useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    setNewTodoValue('')
  };


  return (
    <form onSubmit={onSubmit}>
      <label>To-Do</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={() => setOpenModal(prevState => !prevState)}
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
