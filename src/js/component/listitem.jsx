import React from "react";


const Listitem = (props) => {


  return (
    <div class="container">
  <ul class="list-group">

 <li class="list-group-item d-flex justify-content-between align-items-center">
   <p>{props.item}</p>
    <span class="badge badge-primary badge-pill"><button type="button" class="btn-close" aria-label="Close"></button></span>
  </li>
  </ul>
  </div>
  );
};

export default Listitem;
