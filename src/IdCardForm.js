import { useState } from "react";
//import "./IdCardForm.css";
//import App from "./App";

const inputStyle={
  width:'90%',
  padding:'8px',
  border:'1px solid #ccc',
  'border-radius':'4px',
  resize:'vertical'
}
const labelStyle={
  padding:'5px 5px 5px 0',
  display: 'inline-block',
}
const submitStyle={
 'background-color':'#04AA6D',
  color: 'white',
  padding:'10px 20px',
  border: 'none',
  cursor:'pointer',

}
function IdCardForm() {
    const [form, setForm] = useState({
      first : " ",
      last: "",
      streetnumber: "",
      streetname: "",
      city: "",
      country: "",
      phone: "",
      cell: "",


    });
  
    function handleChange(event){
      
      setForm({
        ...form, [event.target.name]: event.target.value,
      });
    }
    
    const saveForm = () => {
      fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form) // Use your own property name / key
        
      })
        .then((res) => res.json())
        .then((result) => setForm(result))
         
    }
  
  
    function handleSubmit(event){
      event.preventDefault();
      saveForm();
    }
  
    return (
      <form className="new-poem-form" onSubmit={handleSubmit}>
         
        <div>
          <label for="first" style={labelStyle} >First Name:</label>
          <input style={inputStyle}
            onChange={handleChange} 
            value={form.first} 
            name="first"
            type="text"
          />
        </div>
        
        <div>
          <label for="last" style={labelStyle} >Last Name:</label>
          <input style={inputStyle}
            onChange={handleChange} 
            value={form.last} 
            type="text"
            name="last"
          />
        </div>
        
        <div>
          <label for="city" style={labelStyle} >City:</label>
          <input style={inputStyle}
            onChange={handleChange} 
            value={form.city} 
            type ="text"
            name ="city"
            
          />
        </div>
        
        <div>
          <label for="country" style={labelStyle} >Country:</label>
          <input style={inputStyle}
            onChange={handleChange} 
            value={form.country} 
            type ="text"
            name="country"
          />
        </div>
        
        <div>
          <label for="phone" style={labelStyle} >Telephone:</label>
          <input style={inputStyle}
            onChange={handleChange} 
            value={form.phone} 
            type ="text"
            name="phone"
          />
        </div>
        
        <div>
          <label for="cell" style={labelStyle} >Mobile Phone:</label>
          <input style={inputStyle}
            onChange={handleChange} 
            value={form.cell} 
            type ="text"
            name="cell"
          />
        </div>
        <br/>
        <input style={submitStyle}  type="submit" value="Generate Your ID Card" />
        
      </form>
    );
  }
  


 
export default IdCardForm;