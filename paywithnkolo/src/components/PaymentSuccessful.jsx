import React, { Component } from "react";
import logo from "../logo.svg";
import arrowright from "../arrowright.svg";
import LoadingComponent from "./LoadingComponent";

class PaymentSuccessful extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="payment-page nk-bg-light p-5">
        <div className="page-content bg-light">
          <div className="brand p-4">
            <img
              src={logo}
              height={34}
              width={34}
              alt=""
              className="img-fluid"
            />
            <h4 className="heading nk-ft-bold nk-tx-primary-dark ">
              Pay With Nkolo
            </h4>
          </div>
          <div className="pc-body">
            <div className=" d-flex flex-column justify-content-center align-items-center p-5">
              <LoadingComponent />
            </div>
            <div className="pc-bottom nk-bg-primary-dark nk-tx-light">
              <p className="p-5 text-start">
                At Nkolo, out mission is to simplify invoice payments for small
                merchants and customers like you.
              </p>
              <hr />
              <div className="pc-bottom_prompt pb-3 px-5">
                <button className="confirm-button ">
                  <p className="span nk-tx-accent d-inline nk-ft-semibold">
                    Search Invoice Manually
                  </p>
                  <img
                    src={arrowright}
                    height={24}
                    width={24}
                    alt=""
                    className="img-fluid"
                  />
                </button>

                <small className="nk-tx-light nk-ft-extralight text-start">
                  We are sorry if this is taking too long.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentSuccessful;
