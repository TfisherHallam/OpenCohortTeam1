import { slide as Menu } from 'react-burger-menu';
import React from "react";
import './hamBurgerMenu.css';


function BurgerNew() {
  return (
    <Menu>
      <a id="/Home" className="menu-item" href="/">Home</a>
      <a id="/Sell" className="menu-item" href="/Sell">Sell</a>
      <a id="/Buying" className="menu-item" href="/Buying">Buy</a>
      <a id="/Account" className="menu-item" href="/Account">Account</a>
    </Menu>
  );
}

export default BurgerNew;