import React from 'react';
import { NavLink } from 'react-router-dom';

function LinkButton({ linkTo, title }) {
  console.log(title);

  return (
    <NavLink
      className="submit__btn"
      to={linkTo}
    >
      {title}
    </NavLink>
  );
}

export default LinkButton;
