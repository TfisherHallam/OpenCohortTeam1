import React from "react";
import { Link } from 'react-router-dom';
import "./burgerMenu.css";

function BurgerMenu() {

  return (<div>
        <label className="burgerNav">
          <input type="checkbox"/>
        </label>
        <aside className={"sideBar"}>
          <nav className={"nav"}>
            <ul>
              <li><Link to={"/Home"} className={"active"}>HOME</Link></li>
              <li><Link to={"/Listing"}>LISTING</Link></li>
              <li><Link to={"/Buying"}>BUYING</Link></li>
              <li><Link to={"/Account"}>MY ACCOUNT</Link></li>
            </ul>
          </nav>
        </aside>
      </div>)
}

export default BurgerMenu;