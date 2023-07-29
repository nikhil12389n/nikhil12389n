import React, { useEffect, useState } from 'react';
import './trackorder.css';
import axios from 'axios';
import { FaCheck, FaTimes } from 'react-icons/fa';
export default function Trackorder() {
  window.document.body.style.backgroundColor = "rgb(244, 245, 234)";
  const [trackOrder, setTrackOrder] = useState();
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/getTrackOrders', { params: { user: localStorage.getItem('ROLENAME') } });
        console.log(data,"hi");
        setTrackOrder(data.trackorder);
      }
      catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const handleTrackOrderClick = (requestId) => {
    setSelectedRequestId(requestId);
  };
  console.log(trackOrder);

  return (
    <>
    <div className="d-flex justify-content-center">
        <h3>TrackOrder</h3>
    </div>
      {trackOrder &&
        <div className='container my-4'>
          <div className="card-container track-cont">
            {trackOrder.requests &&
              trackOrder.requests.map((request, index) => (
                <div className="card card-contTrack my-3" key={index}>
                  <div className="card-body">
                    <div className="card-item" key={request.requestno}>
                      <h3 className="card-subtitle mb-2">Request Number: {request.requestno}</h3>
                      <p className="card-text">ID: {trackOrder._id}</p>
                      <button
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#trackModal"
                        onClick={() => handleTrackOrderClick(request._id)}
                      >
                        Get Track Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            <div className="  modal " id="trackModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Request Details</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <div className="modal-body">
                    {trackOrder.requests &&
                      trackOrder.requests.map((request, i) =>
                        request._id === selectedRequestId && (
                          <React.Fragment key={request._id}>
                            <h3>Shipping Track Order</h3>
                            <div className="progressbar-container">
                              <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></div>
                              </div>
                              <ul id="progressbar">
                                {request.desc.map((description, index) => (
                                  <>





                                    <span className='mx-1' >{description}</span>







                                  </>
                                ))}
                              </ul>
                            </div>
                          </React.Fragment>
                        )
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      }
    </>

  );
}


