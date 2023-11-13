import React, { Component } from "react";
import logo from "../logo.svg";
import arrowright from "../arrowright.svg";

class MakePayment extends Component {
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
            <h4 className="heading nk-ft-bold nk-tx-primary-dark ">Nkolo</h4>
          </div>
          <div className="pc-body">
            <div className="pc-top px-5 py-2">
              <h5 className="nk-ft-bold text-start ">
                Invoice Payment Request
              </h5>
              <p className="nk-ft-regular text-start">
                Hey. This is an invoice from{" "}
                <span className="nk-ft-medium nk-tx-primary">
                  Boulevard Inc
                </span>{" "}
                for{" "}
                <span className="nk-ft-medium nk-tx-primary">
                  reason for the invoice.
                </span>{" "}
                It was issued on{" "}
                <span className="nk-ft-medium nk-tx-primary">12-10-2023</span>{" "}
                and is due to expire in five days. If the details below are okay
                with you, please confirm and proceed to payment.
              </p>
            </div>
            <div className="pc-bottom nk-bg-primary-dark nk-tx-light">
              <div className="details px-5 pt-2 nk-ft-medium">
                <p className="nk-ft-extralight text-start">Invoice Data</p>
                <div className="deatials-item d-flex flex-row justify-content-between">
                  <p className="details-item_tag">Invoice Amount</p>
                  <p className="details-item_tag">12,450 xaf</p>
                </div>
                <div className="deatials-item d-flex flex-row justify-content-between">
                  <p className="details-item_tag">Transfer Fee</p>
                  <p className="details-item_tag">150 xaf</p>
                </div>
                <div className="deatials-item d-flex flex-row justify-content-between">
                  <p className="details-item_tag">Total Payable</p>
                  <p className="details-item_tag">12,600 xaf</p>
                </div>
                <div className="deatials-item d-flex flex-row justify-content-between">
                  <p className="details-item_tag">Invoice Id</p>
                  <p className="details-item_tag">X12J30IL</p>
                </div>
              </div>
              <hr />
              <div className="pc-bottom_prompt pb-3 px-5">
                <button className="confirm-button ">
                  <p className="span nk-tx-accent d-inline nk-ft-semibold">
                    Confirm and Pay
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
                  All transfers are subject to review, and could be delayed or
                  stopped if we identify an issue.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MakePayment;
