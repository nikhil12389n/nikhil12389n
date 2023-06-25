import React, { useEffect, useState } from 'react';
import Qrcode from 'react-qr-code';

export default function QrcodeForm() {
  const [id, setId] = useState('');
  useEffect(() => {
    setId(window.location.href.split('/')[window.location.href.split('/').length - 1]);
  }, []);

  const [values, setValues] = useState({
    number: '',
    country: '',
    adultQuantity: 0,
    childQuantity: 0,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleDecrease = (field) => {
    setValues((prevState) => ({
      ...prevState,
      [field]: prevState[field] > 0 ? prevState[field] - 1 : 0,
    }));
  };

  const handleIncrease = (field) => {
    setValues((prevState) => ({
      ...prevState,
      [field]: prevState[field] + 1,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form values
  };

  return (
    localStorage.getItem("Name") &&
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Number
          </label>
          <input type="number" className="form-control" id="number" aria-describedby="emailHelp" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input type="text" className="form-control" id="country" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Adult ticket Quantity
          </label>
          <div className="input-group">
            <button className="btn btn-dark" onClick={() => handleDecrease('adultQuantity')}>
              -
            </button>
            <input type="number" id="adultQuantity" className="form-control" value={values.adultQuantity} readOnly />
            <button className="btn btn-success" onClick={() => handleIncrease('adultQuantity')}>
              +
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="quantityc" className="form-label">
            Child ticket Quantity
          </label>
          <div className="input-group">
            <button className="btn btn-dark" onClick={() => handleDecrease('childQuantity')}>
              -
            </button>
            <input type="number" id="childQuantity" className="form-control" value={values.childQuantity} readOnly />
            <button className="btn btn-success" onClick={() => handleIncrease('childQuantity')}>
              +
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Book
        </button>
      </form>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                QR Code
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Qrcode value={id+" "+values.country+" "+localStorage.getItem("Name")+" "+values.adultQuantity+" "+values.childQuantity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
