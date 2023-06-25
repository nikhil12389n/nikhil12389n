import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { typography } from '@mui/system';
import axios from 'axios';

export default function UpdateDocuments() {
  const [res, setRes] = useState([]);
  const [monument, setMonument] = useState({
    monumentname: '',
    location: '',
    imagelink: '',
    rating: '',
    cost: '',
    slots: '',
    desc: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:4000/AllMonuments');
      console.log(data);
      setRes(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e, ele) => {
    
    e.preventDefault();
    console.log(monument);
  };
  
  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setMonument(prevMonument => ({
      ...prevMonument,
      [key]: value
    }));
  };
  return (
    <>
      <div className="container m-auto">
        {res.length > 0 &&
          res.map((ele, i) => {
            return (
              <div className="accordion my-5" key={i}>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${i}`}
                      aria-expanded="true"
                      aria-controls={`collapse-${i}`}
                    >
                      {ele.monumentname}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${i}`}
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body" style={{ overflowY: 'auto', maxHeight: '300px' }}>
                      <form className="bg-light" onSubmit={(e) => handleSubmit(e, ele)}>
                        <div className="mb-3">
                          <label htmlFor={`monumentname${i}`} className="form-label">
                            Monumentname
                          </label>
                          <input
                            type="text"
                            name="monumentname"
                            className="form-control"
                            id={`monumentname${i}`}
                            defaultValue={ele.monumentname}
                            onChange={(e) => handleInputChange(e, 'monumentname')}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor={`imagelink${i}`} className="form-label">
                            Image link
                          </label>
                          <input
                            type="text"
                            name="imagelink"
                            className="form-control"
                            id={`imagelink${i}`}
                            defaultValue={ele.imagelink}
                            onChange={(e) => handleInputChange(e, 'imagelink')}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor={`location${i}`} className="form-label">
                            Location
                          </label>
                          <input
                            type="text"
                            name="location"
                            className="form-control"
                            id={`location${i}`}
                            defaultValue={ele.location}
                            onChange={(e) => handleInputChange(e, 'location')}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor={`rating${i}`} className="form-label">
                            Rating
                          </label>
                          <input
                            type="number"
                            name="rating"
                            className="form-control"
                            id={`rating${i}`}
                            defaultValue={ele.rating}
                            onChange={(e) => handleInputChange(e, 'rating')}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor={`cost${i}`} className="form-label">
                            Cost
                          </label>
                          <input
                            type="text"
                            name="cost"
                            className="form-control"
                            id={`cost${i}`}
                            defaultValue={ele.cost}
                            onChange={(e) => handleInputChange(e, 'cost')}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor={`slots${i}`} className="form-label">
                            Slots
                          </label>
                          <input
                            type="text"
                            name="slots"
                            className="form-control"
                            id={`slots${i}`}
                            defaultValue={ele.monumentname}
                            onChange={(e) => handleInputChange(e, 'slots')}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor={`desc${i}`} className="form-label">
                            Description
                          </label>
                          <textarea
                            type="text"
                            name="desc"
                            className="form-control"
                            rows="7"
                            id={`desc${i}`}
                            defaultValue={ele.desc}
                            onChange={(e) => handleInputChange(e, 'desc')}
                          />
                          <button type="submit" className="btn btn-success" style={{ float: 'right' }}>
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
