import React, {useState} from "react";
import "./burgerMenu.css";

function BurgerMenu() {

  return (<div>
        <label className="burgerNav">
          <input type="checkbox"/>
        </label>
        <aside className={"sideBar"}>
          <nav className={"nav"}>
            <ul>
              <li><a href={"/Home"} className={"active"}>HOME</a></li>
              <li><a href={"/Listing"}>LISTING</a></li>
              <li><a href={"/Buying"}>BUYING</a></li>
              <li><a href={"/Account"}>MY ACCOUNT</a></li>
            </ul>
          </nav>
        </aside>
      </div>)
}

export default BurgerMenu;