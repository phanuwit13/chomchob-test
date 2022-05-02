import React, { Component, Fragment } from "react";
import {} from "../../theme/components/contents/contents.css";
import fullstar from "../../assets/icons/star-full.svg";
import star from "../../assets/icons/star.svg";
import ReactStars from "react-rating-stars-component";
import { withRouter } from "react-router-dom";
class content extends Component {
  toPath (path) {
    this.props.history.push(path)
  }
  render() {
    return (
      <Fragment>
      {console.log(this.props)}
        <div className="container content">
          <span>
            <b>Product({ this.props.data.length })</b>
          </span>
          <div className="row">
            {this.props.data.map((value, index) => {
              return (
                <div key={index} className="col-12 col-md-6 col-xl-4 col-xxl-3">
                  <div className="card" onClick={ (e)=> { this.toPath('/detail'); this.props.action(value)}}>
                    <div className="card-header">
                      <img
                        className="img-product card-img-top"
                        src={value?.image_url}
                        alt="..."
                      />
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item container">
                        <div className="row container row-brand">
                          <div className="col-3 box-brand">
                            <img
                              className="img-brand"
                              src={value.brand_info.url}
                              alt="..."
                            />
                          </div>
                          <div className="col-9 name-brand">
                            <span> {value.name} </span>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item container row-price">
                        <div className="row container row-brand">
                          <div className="col-3"></div>
                          <div className="col-4">
                            <span className="title-price">Price</span>
                            <br />
                            <span className="volumn-price">฿{value.price}</span>
                          </div>
                          <div className="col-5">
                            <span className="title-price">
                              Reviews ({value.review.number} reviews)
                            </span>
                            <br />
                            {/* <Rating
                                                    emptySymbol={<img src={star} alt='' className="icon" />}
                                                    fullSymbol={<img src={fullstar} alt='' className="icon" />}
                                                    initialRating={value.review.rating}
                                                    // readonly
                                                /> */}
                            <ReactStars
                              value={value.review.rating}
                              size={17}
                              emptyIcon={
                                <img src={star} alt="" className="icon" />
                              }
                              filledIcon={
                                <img src={fullstar} alt="" className="icon" />
                              }
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(content);