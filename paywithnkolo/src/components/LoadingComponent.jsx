import React, { Component } from "react";

const LoadingComponent = ({ what }) => {
  return (
    <div className="loadingpage">
      <div class="loaders-container">
        <div class="loaders">
          <div class="line nk-bg-primary-dark "></div>
          <div class="line nk-bg-primary-dark "></div>
          <div class="line nk-bg-primary-dark "></div>
          <div class="line nk-bg-primary-dark "></div>
        </div>
        <p className="pt-3 nk-tx-primary-dark">{what}</p>
      </div>
    </div>
  );
};

export default LoadingComponent;
