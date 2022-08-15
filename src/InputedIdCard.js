import React from 'react';
function InputedIdCard() {
    const [formData, setFormdata] = useState([])
    
  
    useEffect(() => {
      fetch("")
      .then((r) => r.json())
      .then((data) =>setFormData(data));
      
    }, []); 
    
    
    
    return (
      <div>
          <div className="card">
            <div className='header'>World Wide Unique Identity Card</div>
            <img  src={`https://countryflagsapi.com/png/${formData.country}`} width='50 ' height='32' style={{verticalAlign:middle}}/> 
            <hr  className='line'/>
            <br/>
            <div className="title">Name: {formData.first} {formData.last} </div>
            <br/>
            <br/>
            <div className="card_body">
                <div className="card_image"> <img src={formData.picture} alt={formData.first} /></div>
                <Location location={formData.location} />
                <PhoneNumber type="Home" number={formData.phone} />
                <PhoneNumber type="Mobile" number={formData.cell} /> 
            </div>
        </div>
      </div>
      
    );
  }
  
  export default InputedIdCard;