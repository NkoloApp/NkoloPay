import React, { Component } from "react";
import logo from "../logo.svg";
import arrowright from "../arrowright.svg";

class PayingNumber extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="payment-page nk-bg-light p-5">
        <div className="payingnumber-page_content bg-light">
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
          <form action="" className="pc-form">
            <div className="pc-body">
              <div className="pc-paying-top px-5 py-2">
                <h5 className="nk-ft-bold text-start ">
                  How would you like to pay ?
                </h5>
                <div class="mb-3 mt-3 d-flex flex-column align-content-start">
                  <p className="text-start">Enter phone number</p>
                  <input
                    type="phone number"
                    class="form-control"
                    id="number"
                    placeholder="+237 674 234 000"
                    name="email"
                  />
                </div>
              </div>
              <div className="pc-bottom nk-bg-primary-dark nk-tx-light">
                <p className="prompt nk-ft-regular px-5 py-3 text-start">
                  We will send a prompt to your phone, and you can complete the
                  payment by entering your mobile money password on your phone.
                  Please make sure you have access to the phone.
                </p>
                <hr />
                <div className="pc-bottom_prompt pb-3 px-5">
                  <button className="confirm-button ">
                    <p className="span nk-tx-accent d-inline nk-ft-semibold">
                      Continue to Payment
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
          </form>
        </div>
      </div>
    );
  }
}

export default PayingNumber;
