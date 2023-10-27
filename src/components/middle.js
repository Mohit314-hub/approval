import React, { useState } from "react";
import "./table.css"; // Import your CSS file

const Table = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "John",
      guestHouse: 1,
      roomId: 123,
      email: "john@gmail.com",
      contactNumber: "1234567890",
      reference: "Student",
      reason: "Vacation",
      status: "Pending",
    },
    {
      id: 2,
      name: "Alice",
      guestHouse: 2,
      roomId: 456,
      email: "alice@gmail.com",
      contactNumber: "9876543210",
      reference: "Faculty",
      reason: "Conference",
      status: "Pending",
    },
  ]);

  const [deletedRequests, setDeletedRequests] = useState([]);
  const [undoRequest, setUndoRequest] = useState(null);

  const handleAcceptClick = (id) => {
    const updatedRequests = requests.map((request) => {
      if (request.id === id) {
        // Update the status to "Accepted" and remove the "Reject" button
        return { ...request, status: "Accepted" };
      }
      return request;
    });
    setRequests(updatedRequests);
  };

  const handleRejectClick = (id) => {
    const rejectedRequest = requests.find((request) => request.id === id);
    if (rejectedRequest) {
      // Move the rejected request to the deletedRequests array
      setDeletedRequests([...deletedRequests, rejectedRequest]);
      
      // Remove the rejected request from the original requests
      const updatedRequests = requests.filter((request) => request.id !== id);
      setRequests(updatedRequests);
      
      // Set the rejected request for possible recovery
      setUndoRequest(rejectedRequest);
    }
  };

  const handleUndoClick = () => {
    if (undoRequest) {
      // Restore the previously rejected request
      setRequests([...requests, undoRequest]);
      
      // Remove the request from the deletedRequests array
      const updatedDeletedRequests = deletedRequests.filter((request) => request.id !== undoRequest.id);
      setDeletedRequests(updatedDeletedRequests);
      
      // Clear the undoRequest
      setUndoRequest(null);
    }
  };

  const handleUndoApprovalClick = (id) => {
    const approvedRequest = requests.find((request) => request.id === id);
    if (approvedRequest) {
      // Set the status back to "Pending" and re-enable the "Reject" button
      const updatedRequests = requests.map((request) => {
        if (request.id === id) {
          return { ...request, status: "Pending" };
        }
        return request;
      });
      setRequests(updatedRequests);
    }
  };
  const handleRecoverClick = (id) => {
    const reversedRequest = requests.find((request) => request.id === id);
    if (reversedRequest) {
      // Set the status back to "Pending" and re-enable the "Reject" button
      const updatedRequests = requests.map((request) => {
        if (request.id === id) {
          return { ...request, status: "Pending" };
        }
        return request;
      });
      setRequests(updatedRequests);
    }
  };

  const addNewRequest = () => {
    // Your add new request logic here
  };

  return (
    <div className="table-container">
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
                {request.status === "Pending" ? (
                  <>
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      onClick={() => handleAcceptClick(request.id)}
                      disabled={request.status !== "Pending"}
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRejectClick(request.id)}
                      disabled={request.status !== "Pending"}
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => handleUndoApprovalClick(request.id)}
                      disabled={request.status !== "Accepted"}
                    >
                      Undo Approval
                    </button>
                    {request.status === "Rejected" && (
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => handleRecoverClick(request.id)}
                        disabled={request.status !== "Rejected"}
                      >
                        Recover
                      </button>
                    )}
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {deletedRequests.length > 0 && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUndoClick}
        >
          Undo
        </button>
      )}

      <button
        type="button"
        className="btn btn-primary"
        onClick={addNewRequest}
      >
        Add New Request
      </button>
    </div>
  );
};

export default Table;
