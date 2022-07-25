import React from 'react';
import './index.css';

function RadioButton({ handleChange, gender }) {
  return (
    <div className="form__input">
      {gender.map((item, index) => (
        <div key={item.id}>
          <input type="radio" name={item.name} value={item.value} onChange={handleChange} defaultChecked={index === 0 ? 'true' : ''} />
          <label htmlFor={item.name}>{ item.label }</label>
        </div>
      ))}
    </div>
  );
}

export default RadioButton;
