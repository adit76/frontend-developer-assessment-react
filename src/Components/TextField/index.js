import React from 'react';
import './index.css';

function TextField({
  name, label, error, value, handleChange,
}) {
  return (
    <div className="form__input">
      {
            label
              ? (
                <label
                  htmlFor={name}
                  className={`form__input__label ${value.length ? 'form__input__label--shrink' : ''}`}
                >
                  {label}
                </label>
              )
              : null
        }

      <input className="form__input__input" type="text" name={name} onChange={handleChange} value={value} />
      <p className="error__message">{error}</p>

    </div>
  );
}

export default TextField;
