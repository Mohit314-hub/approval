import React from "react";
import BookingDetails from "./BookingDetails";
import BookingForm from "./BookingForm";
import PersonDetails from "./PersonDetails";
import "./Container.css"
const Container = () => {
  return (
    <>
      <div className="MainContainer">
        <div className="row g-3">
          <div className="col-4 temp1">
            <div className="booked"><BookingDetails /></div>
            
          </div>
          <div className="col-8 temp2">
            <BookingForm />
            <PersonDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
