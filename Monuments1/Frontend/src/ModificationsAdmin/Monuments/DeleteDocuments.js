import React,{ useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { typography } from '@mui/system';
import axios from "axios";

export default function DeleteDocuments() {
    const [res, setRes] = useState([]);
const [monument, setMonument] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/AllMonuments");
      setRes(data);
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };

  fetchData();
}, []);

useEffect(() => {
  const deleteMonument = async () => {
    console.log(monument);
    try {
      if (monument.length!==0) {
        const { data } = await axios.delete("http://localhost:4000/DeleteMonument", { data: monument });
        console.log(data);
        if (data.deleted===false) {
          window.alert("Not deleted. Error in code!");
        } else {
          window.alert("Deleted successfully!");
          window.location.reload();  
    }
      }
    } catch (err) {
      window.alert("Error in deleting monument!");
    }
  };

  deleteMonument();
}, [monument]);

const deletemonument= (ele) => {
  setMonument(ele);
};

// Rest of your component code


    return (
        <>
            <div classNameName='container'>

                {res.length > 0 &&
                    res.map((ele, i) => {
                        return (
                            <div className="accordion" key={i} >
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${i}`} aria-expanded="true" aria-controls={`collapse-${i}`} >
                                            {ele.monumentname}
                                        </button>
                                    </h2>
                                    <div id={`collapse-${i}`} className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <img src={ele.imagelink} alt="" style={{height:"5cm"}}/>
                                            
                                            <div>
                                            <p><StarIcon style={{ color: "yellow" }}></StarIcon> {ele.rating}</p>
                                            </div>
                                            <div>
                                            <p>
                                                {ele.desc}
                                            </p>
                                            </div>
                                            <div>
                                            <LocationOnIcon></LocationOnIcon> {ele.location}
                                            </div>
                                            
                                            <div>
                                            <AccessTimeIcon></AccessTimeIcon> morning   {ele.slots.split(",")[0]}
                                            <AccessTimeIcon></AccessTimeIcon> evenning  {ele.slots.split(",")[1]}
                                            </div>
                                            <div>
                                            <ConfirmationNumberIcon></ConfirmationNumberIcon> Indian ticket cost {ele.cost.split(",")[0]}
                                            <ConfirmationNumberIcon></ConfirmationNumberIcon> Foreign indian cost {ele.cost.split(",")[1]}
                                            <button className='btn btn-danger' style={{float:"right"}} onClick={()=>deletemonument(ele)}>Delete Monument</button>
                                            </div>
                                            


                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}
