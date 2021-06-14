import React from 'react';
import Vimal from "../assest/pexels-hernan-pauccara-1210273.jpg"

function Title(props) {
  const { name, leadText } = props;

  return (
    <div className="container">
      <div className="row text-center align-items-center my-5 pt-5">
        <div className="col-12 col-md-6">
          <img className="img-fluid rounded-circle w-75" src={Vimal} alt="your name" />
        </div>
        <div className="col-12 col-md-6">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
            Hi, I am <span className="text-info"> {name} </span>
          </div>
          <h4 className="font-weight-light"> {leadText} </h4>
        </div>
      </div>
    </div>
  );
}

export default Title;