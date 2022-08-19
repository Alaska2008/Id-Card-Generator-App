import React, { useState, useEffect } from 'react';
import Home from './Home.js';
import LocationForm from './LocationForm.js';


function InputedIdCard( {localData} ) {
    const [formData, setFormData] = useState([])
    useEffect(() => {
      fetch("")
      .then((r) => r.json())
      .then((data) =>setFormData(data));
      
    }, []); 
    
  console.log(localData) 
  console.log(localData) 
    
    return (
      <div>
          <div className="card">
            <div className='header'>World Wide Unique Identity Card</div>
            <img  src={`https://countryflagsapi.com/png/${localData.country}`} width='50 ' height='32' /> 
            <hr  className='line'/>
            <br/>
            <div className="title">Name: {localData.first} {localData.last} </div>
            <br/>
            <br/>
            <div className="card_body">
                <div className="card_image"> <img src={localData.picture} alt={localData.first} /></div>
                <LocationForm location={localData.location} />
                
            </div>
        </div>
      </div>
      
    );
  }
  
  export default InputedIdCard;