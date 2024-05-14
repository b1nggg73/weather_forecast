import React from 'react';
import './Filters.css';
import DropDownList from './DropDownList/DropDownList';

const Filters = () => {
  return (
    <div className="filters">
      <h3 className="filters-name">Filters</h3>
      <DropDownList arr_prop={['Coldest', 'Warm', 'Hot']} />
      <DropDownList
        arr_prop={[
          '>40°C',
          '30°C - 40°C',
          '20°C - 30°C',
          '10°C - 20°C',
          '0°C - 10°C',
          '-10°C - 0°C',
          '-20°C - -10°C',
          '<-20°C',
        ]}
      />
      <DropDownList arr_prop={['Rainy', 'Sunny', 'Cloudy']} />
    </div>
  );
};

export default Filters;
