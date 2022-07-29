import React from 'react';

function Button({ title }) {
  console.log(title);

  return (
    <div>
      <button className="submit__btn" type="submit">{title}</button>
    </div>

  );
}

export default Button;
