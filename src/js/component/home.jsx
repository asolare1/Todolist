import React from "react";
import Theheader from "./header.jsx";
//include images into your bundle

import Input from "./input.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <div class="todocontainer">
      <Theheader/>
      <Input/>
      <Footer/>
    </div>
  );
};

export default Home;
