import React, { useState } from "react";
import Listitem from "./listitem.jsx";

const Input = () => {
  
  const [input, setInput] = useState("");
  
  const handleSubmit = e =>{

    e.preventDefault();

    setInput("");
  };

  const handleOnChange = (e) =>{

    setInput(e.target.value);

  };
  
  return (
<div>
      
<div class="input-group mb-3">
<form class="d-flex input-group mb-3" onSubmit={handleSubmit}>
  <input 
  type="text" 
  value={input}
  onChange={handleOnChange}
  class="form-control" 
  placeholder="ToDo" 
 />
  <button class="btn btn-outline-secondary" >Add todo</button>
</form>
  <Listitem
   item={input}
   />
</div>

</div>
  );
};

export default Input;
