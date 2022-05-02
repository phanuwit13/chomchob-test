/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component,Fragment } from "react";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icons/cart.svg";
import {
  Link
} from "react-router-dom";
import {} from "../../theme/components/nav/menu.css";

import { connect } from "react-redux";

class Menu extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
          <a className="navbar-brand" href="#">
                <img src={ logo } alt='...'></img>
          </a>
            <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
              <ul className="navbar-nav container-fluid justify-content-center">
              { this.props.classify.map((value, index) => {
                  return (
                    <li key={ index } className="nav-item">
                        <Link to="/" className={ index === 0 ? "active nav-link" : "nav-link"} href="#">
                            {value.titleClass}
                        </Link>
                    </li>
                  )
              })}
              </ul>
            </div>
            <Link  to="/cart" className="navbar-brand" href="#">
                <img src={ cart } alt='...'></img><span className="badge badge-light">{this.props.data.length}</span>
            </Link>
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        {console.log(this.props)}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state };
};

export default connect(mapStateToProps)(Menu)