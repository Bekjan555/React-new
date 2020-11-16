import React from "react";
import "./_style.scss";
import Atabek from "../../assets/Atabek.jpg" ;


const New = () => {
  return (
    <section className="new">
      <div className="container">
        <div className="new__conent row">
          <div className="new__item col-6">
            <h2 className="new__title title">Subscribe to our newsletter</h2>
            <h3 className="new__subtitle subtitle">
              Send me your email address
            </h3>
            <p className="new__description description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
            <input className="new__input" placeholder="Your email" type="text"/>
          </div>
          <div className="col-6 new__item">
            <img src={Atabek} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;
