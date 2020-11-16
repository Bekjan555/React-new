import { Link } from 'react-router-dom';
import React from "react";
import './styles.scss';


const footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__shop">
            <h2 className="shop__title">
              Shop
            </h2>
            <ul className="footer__list">
              <li className="footer__item"><Link to="" className="footer__link">New In</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">Women product</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">Men Product</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">Harbal Oil</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">Natarul Product</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">top brands</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">speacial offers</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">lookbook</Link></li>
            </ul>
          </div>
          <div className="footer__Information">
            <h2 className="information__title">
              Information
            </h2>
            <ul className="footer__list">
              <li className="footer__item"><Link to="" className="footer__link">About us</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">Customers</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">Service</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">Collection</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">Best</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">Sellers</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">Blog</Link></li>
            </ul>
          </div>
          <div className="footer__Legal">
            <h2 className="legal__title">
              Legal
            </h2>
            <ul className="footer__list">
              <li className="footer__item"><Link to="" className="footer__link">Manufacturers</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">Privacy Policy</Link></li>
              <li className="footer__item"><Link to="" className="footer__link">Terms & Condition</Link></li>
            </ul>
          </div>
          <div className="footer__Follow Us">
            <h2 className="follow__title">
              Follow Us
            </h2>
            <ul className="footer__list">
              <li className="footer__item"><Link to="" className="footer__link"></Link></li>
              <li className="footer__item"><Link to="" className="footer__link"></Link></li>
              <li className="footer__item"><Link to="" className="footer__link"></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default footer;
