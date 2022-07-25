import React from 'react';

function TextArea({
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

      <textarea className={`form__input__input ${error ? 'form__input__input--error' : ''}`} name={name} onChange={handleChange} value={value} />
      <p className="error__message">{error}</p>

    </div>
  );
}

export default TextArea;
