import { useState } from "react";
import logo from "../assets/images/logo-white.svg";

const CategoriesButton = () => {
  const [categoriesButtonClicked, setCategoriesButtonClicked] = useState(false);

  const toggleCatButton = () => {
    setCategoriesButtonClicked(!categoriesButtonClicked);
  };

  return (
    <div
      className={`categoriesButton ${categoriesButtonClicked ? "clicked" : ""}`}
      onClick={toggleCatButton}
    >
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>

      <div className="bars">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarLeft">
        <div className="categoriesMenu">
          <CategoriesButton />
          <div className="categoriesList">
            <span className="category">cat1</span>
            <span className="category">cat1</span>
            <span className="category">cat1</span>
          </div>
        </div>
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="menu">
        <span>currency</span>
        <span>cart</span>
        <span>settings</span>
      </div>
    </div>
  );
};

export default TopBar;
