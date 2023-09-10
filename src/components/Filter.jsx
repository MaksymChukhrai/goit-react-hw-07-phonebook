import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Импортируем useDispatch
import { setFilter } from '../redux/filtersSlice'; // Импортируем экшен setFilter

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value)); // Відправка дії setFilter при зміні значення фільтру
  };

  return (
    <input
      type="text"
      placeholder="Filter contacts"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};



export default Filter;