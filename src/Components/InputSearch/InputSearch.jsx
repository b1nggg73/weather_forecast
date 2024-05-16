import React, { useState } from 'react';
import './InputSearch.css';

const InputSearch = ({ setName }) => {
  const [value, setValue] = useState('');
  function onHandleInput(e) {
    setValue(e.target.value);
  }
  function onHandleForm(e) {
    e.preventDefault();
    setName(value);
  }
  return (
    <form
      onSubmit={(e) => {
        onHandleForm(e);
      }}>
      <input
        className="input-search"
        placeholder="Search Here"
        value={value}
        onChange={(e) => {
          onHandleInput(e);
        }}></input>
    </form>
  );
};

export default InputSearch;
