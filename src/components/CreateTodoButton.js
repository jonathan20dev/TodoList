import React from 'react';
import '../css/CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
  
  return (
    <button
      className="CreateTodoButton"
      onClick={() => setOpenModal(prevState => !prevState)}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
