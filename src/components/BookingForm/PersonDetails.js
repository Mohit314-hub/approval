import React from "react";
import "./PersonDetails.css"
const PersonDetails = () => {
  return (
    <>
      <div className="person-container center-horizontal">
        <form class="row g-3">
          <h1 className="visitor-heading">
            DETAILS OF PERSON MAKING THE BOOKING
          </h1>
          <div class="col-md-6">
            <label for="firstName" class="form-label">
              First Name
            </label>
            <input type="text" class="form-control" id="firstName" />
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">
              Last Name
            </label>
            <input type="text" class="form-control" id="lastName" />
          </div>

          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>

          <div class="col-md-6">
            <label for="department" class="form-label">
              Department/Section/Center
            </label>
            <input type="text" class="form-control" id="department" />
          </div>

          <div class="col-md-6">
            <label for="phNumber" class="form-label">
              Phone Number
            </label>
            <input type="text" class="form-control" id="phNumber" />
          </div>
          <div class="col-md-6">
            <label for="designation" class="form-label">
              Designation
            </label>
            <input type="text" class="form-control" id="designation" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input type="text" class="form-control" id="inputAddress" />
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonDetails;
