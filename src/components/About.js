import React from 'react';

function About() {
    return (
        <div className="cointainer bg-light py-5 w-100 text-center">
      <h1 className="font-weight-light">My<span className="text-info">Section</span></h1>
      <div className="lead pb-5">I built projects like this</div>
      <div className="row mt-3 ml-5 mr-5">
        <div className="col-12 col-md-6 px-5">
          <h3>What can I do?</h3>
          <div className="text-dark px-4 text-justify">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque sit optio soluta dolor quam neque debitis maiores fugit harum, vero, necessitatibus minus ullam fuga ratione!</p>
          </div>
        </div>
        <div className="col-12 col-md-6 px-5">
          <h3>What Iam doing currently</h3>
          <div className="text-dark px-4 text-justify">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque sit optio soluta dolor quam neque debitis maiores fugit harum, vero, necessitatibus minus ullam fuga ratione!</p>
          </div>
        </div>
      </div>
      <div className="row mt-5 ml-5 mr-5">
        <div className="col-12 col-md-6 px-5">
          <h3>What do I believe</h3>
          <div className="text-dark px-4 text-justify">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque sit optio soluta dolor quam neque debitis maiores fugit harum, vero, necessitatibus minus ullam fuga ratione!</p>
          </div>
        </div>
        <div className="col-12 col-md-6 px-5">
          <h3>How can I help you?</h3>
          <div className="text-dark px-4 text-justify">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque sit optio soluta dolor quam neque debitis maiores fugit harum, vero, necessitatibus minus ullam fuga ratione!</p>
          </div>
        </div>
      </div>
    </div>
    );
}

export default About;