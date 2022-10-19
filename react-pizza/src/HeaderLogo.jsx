import React from 'react';
import logo from './assets/img/pizza-logo.svg';

const HeaderLogo = () => {
  return (
    <div className="header__logo">
      <img width="38" src={logo} alt="Pizza logo" />
      <div>
        <h1>React Pizza</h1>
        <p>delicious pizza all over the world</p>
      </div>
    </div>
  )
}

export default HeaderLogo;