import React from "react";
import "../App.css";

function MensShoeCard(props) {
  return (
    <div className="shoecard">
      <img src={props.imgURL} className="shoe-image" alt=""></img>
      <div>{props.price}</div>
      <div>{props.brand}</div>
      <div>{props.type}</div>
      <div>{props.color}</div>
      <div>{props.size}</div>
      <div>{props.width}</div>
    </div>
  );
}

export default MensShoeCard;
