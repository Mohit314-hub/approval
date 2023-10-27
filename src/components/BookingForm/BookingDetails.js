import React from "react";
import "./BookingDetails.css"
const BookingDetails = () => {
  return (
    <>
      <div class="card details">
        <h4 class="card-header">Booking Details</h4>
        <div class="card-body">
          <div class="gridContainer">
            <div class="row">
              <div class="col">Check-in</div>
              <div class="col">Check-out</div>
            </div>
            <div class="row">
              <div class="col">Mon,Oct 30,2023</div>
              <div class="col">Tue,Oct 31,2023</div>
            </div>
          </div>

          <p class="card-text text">
            Total length of stay : 1 night
            <hr></hr>
            You selected : 1 room
          </p>
          <button type="button" class="btn btn-primary changeBtn">Change your selection</button>
          <h5 className="price-heading">Your Price Summary</h5>
        </div>
        <h4 class="card-header">Total</h4>
      </div>
    </>
  );
};

export default BookingDetails;
