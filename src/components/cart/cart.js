import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {} from "../../theme/components/contents/contents.css";
import { withRouter } from "react-router-dom";
class cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }
  componentDidMount() {
    let sum = 0;
    this.props.data.map((value) => {
      return (sum += value.amount * value.detail.price);
    });
    this.setState({ total: sum });
  }
  render() {
    return (
      <Fragment>
        <div className="container content-detail">
          <div className="title-cart">
            <span>Cart</span>
          </div>
          <div className="cart-table">
            <table className="table ">
              <thead>
                <tr className="row">
                  <th className="col-6 product-title" scope="col">
                    PRODUCT NAME
                  </th>
                  <th className="col-2" scope="col">
                    PRICE
                  </th>
                  <th className="col-2" scope="col">
                    QUANTITY
                  </th>
                  <th className="col-2" scope="col">
                    TOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.map((value, index) => {
                  return (
                    <tr key={index} className="row">
                      <th className="col-6">
                        <div className="col-12 cart-brand">
                          <img
                            className="img-brand"
                            src={value.detail?.image_url}
                            alt="..."
                          />
                          <span>{value.detail.name}</span>
                        </div>
                      </th>
                      <td className="col-2 cart-price">
                        ฿{value.detail.price}
                      </td>
                      <td className="col-2">{value.amount}</td>
                      <td className="col-2 cart-price">
                        ฿{(value.detail.price * value.amount).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="nav justify-content-end">
            <div>
              <span className="subtotal">
                Subtotal ({this.props.data.length} Product):
              </span>
              <span className="sumtotle">฿{this.state.total.toFixed(2)}</span>
              <span className="badge rounded-pill btn-proceed">
                <span>Proceed to Check out</span>
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return { data: state };
};
export default connect(mapStateToProps)(withRouter(cart));
