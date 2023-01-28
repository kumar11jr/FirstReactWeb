import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card" style={{ width: "20rem" }}>
        <img src={props.isc} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <NavLink exact to="/contact" className="btn btn-primary">
            Learn More
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Card;
