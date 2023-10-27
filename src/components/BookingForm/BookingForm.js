import React from "react";
import "./BookingForm.css";
const BookingForm = () => {
  return (
    <>
      <div className="form-container center-horizontal">
        <form class="row g-3">
            <h1 className="visitor-heading">ENTER DETAILS OF VISITOR</h1>
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
          <div class="col-12">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input type="text" class="form-control" id="inputAddress" />
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
          <h6>Name of companions(if any)</h6>
          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              id="designation"
              placeholder="Companion 1"
            />
          </div>

          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              id="designation"
              placeholder="Companion 2"
            />
          </div>
          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              id="designation"
              placeholder="Companion 3"
            />
          </div>

          <h6>Arrival Details</h6>
          <div class="col-md-6">
            <input
              type="date"
              class="form-control"
              id="arrivalDate"
              placeholder="Date of Arrival"
            />
          </div>

          <div class="col-md-4">
            <input
              type="time"
              class="form-control"
              id="arrivalTime"
              placeholder="Time of Arrival"
            />
          </div>

          <h6>Departure Details</h6>
          <div class="col-md-6">
            <input
              type="date"
              class="form-control"
              id="DepartureDate"
              placeholder="Date of Departure"
            />
          </div>
          <div class="col-md-4">
            <input
              type="time"
              class="form-control"
              id="DepartureTime"
              placeholder="Time of Departure"
            />
          </div>

          <div class="col-12">
            <label for="purpose" class="form-label">
              Purpose of visit
            </label>
            <input type="text" class="form-control" id="purpose" />
          </div>

          <h6>Kind of visit</h6>
          <div className="temp">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Official"
              />
              <label class="form-check-label" for="inlineRadio1">
                Official
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Unofficial"
              />
              <label class="form-check-label" for="inlineRadio2">
                Unofficial
              </label>
            </div>
          </div>

          <h6>Who are you booking for ?</h6>
          <div className="temp">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="myself"
                value="myself"
              />
              <label class="form-check-label" for="myself">
                I'm the main guest
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="someoneElse"
                value="someoneElse"
              />
              <label class="form-check-label" for="someoneElse">
                I'm the booking for someone else
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
