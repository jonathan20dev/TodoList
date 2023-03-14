import React from 'react';
import '../css/TodoSearch.css';
import { TodoContext } from '../Context';

function TodoSearch() {
  const {search, setSearch} = React.useContext(TodoContext)
  const onSearchValueChange = (event) => {
    setSearch(event.target.value);
  };
  
  return (
    <input
      className="TodoSearch"
      placeholder="Hacer la cena.."
      value={search}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
