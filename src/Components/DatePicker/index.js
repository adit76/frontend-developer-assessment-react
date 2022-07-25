import React from 'react';

import Picker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker({
  selected, handleDatePicker, maxDate, label, name,
}) {
  return (
    <div className="form__input">
      <label htmlFor={name}>{label}</label>
      <Picker
        name={name}
        selected={selected}
        onChange={handleDatePicker}
        maxDate={maxDate}
      />
    </div>
  );
}

export default DatePicker;
