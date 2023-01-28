import React from "react";
import Card from "./Card";
import Api from "./api";

const Services = () => {
  return (
    <>
      <h2 className="text-center my-5 ">Our Services</h2>
      <div className="container-fluid mb-5  ">
        <div className="row">
          <div className="col-7 mx-auto">
            <div className="row gy-4">
              {Api.map((curr) => {
                return (
                  <Card title={curr.title} desc={curr.desc} isc={curr.image} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
