import React from 'react';
import './index.css';

function RadioButton({ handleChange, gender, label }) {
  return (
    <div className="form__input">
      <p className="label">{label}</p>
      <div className="form__input__radioWrapper">
        {gender.map((item, index) => (
          <div className="form__input__radioItem" key={item.id}>
            <input type="radio" id={item.value} name={item.name} value={item.value} onChange={handleChange} defaultChecked={index === 0 ? 'true' : ''} />
            <label className="radioItem__label" htmlFor={item.value}>{ item.label }</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioButton;
