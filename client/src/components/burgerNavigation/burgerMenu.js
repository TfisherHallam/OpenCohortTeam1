import React, {useState} from "react";
import "./burgerMenu.css";

function BurgerMenu(){

return(
    <div>
    <label className="burgerNav">
      <input type="checkbox" />
    </label>
    <aside className={"sideBar"}>
      <nav>
        <div>HOME</div>
        <div>LISTING</div>
        <div>BUYING</div>
        <div>MY ACCOUNT</div>
      </nav>
    </aside>
    </div>
)
}



export default BurgerMenu;