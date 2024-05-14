import React from 'react';
import './DropDownList.css';
import { Link } from 'react-router-dom';

const DropDownList = ({ arr_prop }) => {
  return (
    <select className="drop-down-list">
      {arr_prop.map((p, index) => (
        <option key={index}>{p}</option>
      ))}
    </select>
  );
};

export default DropDownList;
