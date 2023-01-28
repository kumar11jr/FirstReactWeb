import React from "react";

const Contact = () => {
  return (
    <>
    <h3 className="text-center w-10">Contact Us</h3>
      <form action="" method="post">
        <div className="container-fluid mb-5  w-18">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Name Here"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Phone
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Enter Your Phone"
                rows="3"
              ></input>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter Your Address"
              ></input>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Email Id
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="xyz@123"
              ></input>
              </div>
              <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Your Query
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Description"
              ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-warning btn-md">Submit</button>
          </div>
        </div>
        </div>
        </form>
    </>
  );
};

export default Contact;
