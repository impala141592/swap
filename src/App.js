import React from "react";
import "./assets/style/css/style.css";
import { data, categories, featuredProducts, tags } from "./data";
import TopBar from "./components/TopBar";
import Hero from "./components/HeroSlider";

function App() {
  console.log(JSON.stringify(tags, null, 2));
  return (
    <div className="App">
      <TopBar />
      <Hero />
      {/* <p>sdafsdfsdgsfg</p> */}
      {/* <img className="logo" src={logo} alt="" /> */}

      {/* {categories.map((product) => (
        // <div className="product">{product.name}</div>
      ))} */}
    </div>
  );
}

export default App;
