import React from 'react';
import search from "../../assets/search.svg";
import phone from "../../assets/phone.svg";
import './styles.css';
// import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import user from "../../assets/user.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <div>
            <img className="header__phone" src={phone} alt="phone" />
            <img className="" src={search} alt="search" />
          </div>
          <div className="header__logo">
            <a href="" className="logo__link">
              Shoply
            </a>
          </div>
          <div className="">
            <img src={cart} alt=""/>
            <img src={user} alt=""/>
          </div>
        </div>
        <div className="header__bottom">
          <nav className="header__nav nav">
            <ul className="nav__menu">
              <li className="nav__item">
                <a href="" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  New In
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  Women Product
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  Men Product
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  Top Brands
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  Special Offers
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;