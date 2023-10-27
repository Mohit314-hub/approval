import React, { useState } from "react";

const Table = () => {
  // Step 1: Define a state variable to store an array of requests
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "John",
      guestHouse: 1,
      roomId: 123,
      email: "user@gmail.com",
      contactNumber: "8989898989",
      reference: "Student",
      reason: ".....",
      status: "Pending",
    },
    {
      id: 2,
      name: "Mark",
      guestHouse: 2,
      roomId: 121,
      email: "user@gmail.com",
      contactNumber: "8989898989",
      reference: "Student",
      reason: "......",
      status: "Pending",
    },
  ]);

  // Function to add a new request to the table
  const addNewRequest = () => {
    const newRequest = {
      id: requests.length + 1, // Generate a new ID
      name: "New User",
      guestHouse: 3,
      roomId: 999,
      email: "newuser@gmail.com",
      contactNumber: "9999999999",
      reference: "New Student",
      reason: "New reason",
      status: "Pending",
    };

    // Step 2: Update the state by adding the new request to the array
    setRequests([...requests, newRequest]);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Guest House</th>
            <th scope="col">Room id</th>
            <th scope="col">Email id</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Reference</th>
            <th scope="col">Reason of Booking</th>
            <th scope="col">Approval</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={request.id}>
              <td scope="row">{index + 1}</td>
              <td>{request.name}</td>
              <td>{request.guestHouse}</td>
              <td>{request.roomId}</td>
              <td>{request.email}</td>
              <td>{request.contactNumber}</td>
              <td>{request.reference}</td>
              <td>{request.reason}</td>
              <td>
                {request.status}
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  onClick={() => handleAcceptClick(request.id)}
                  disabled={request.status !== "Pending"}
                >
                  Accept
                </button>{" "}
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRejectClick(request.id)}
                  disabled={request.status !== "Pending"}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to add a new request */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={addNewRequest}
      >
        Add New Request
      </button>
    </>
  );
};

export default Table;
