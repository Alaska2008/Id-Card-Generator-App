import IdCard from './IdCard.js'
import { useState, useEffect } from 'react';
import './Home.css';
import React from "react";
import IdCardForm from './IdCardForm.js';


function Home(){
    const [users, setUsers] = useState([]);
   const [allUsers, setAllUsers] = useState([]);
   const [isOn, setIsOn] = useState(false);
    
  
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=12')
    .then((response) => response.json())
    .then((userData) =>{
       setAllUsers(userData.results);   
       setUsers(userData.results);
       })
        
    
  }, []);
 const filterCards = event => {
  const value =event.target.value.toLowerCase();
  const filteredUsers = allUsers.filter(
    user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)
    )
  );
  setUsers(filteredUsers);
 }

    // eslint-disable-next-line
    {/*
    const [formData, setFormData] = useState({
    firstName:"Amen",
    lastName:"Atikpo",
    city:"Accra",
    street:"",
    state:"",
    country:""

    });
    

    
    const onChange = (e) => {
        const { value, name } = e.target;
        setFormData((state) => ({
            ...state,
            [name]:value
        }))
    }

    function handleSubmit(event) {
    event.preventDefault();

    }*/}
    function handleClick(){
        setIsOn((isOn) => !isOn)
    }
    return (
        <div className="Home">
            
            <input className='search-box' placeholder='search ...' onInput = {filterCards}/>
            <br/>
            <h1 className='header'>World Unique Identity Card</h1>
            <br/>
            <div className='idcard'>
                <div className="sidebar">
                    <button onClick={handleClick} >Show/hide ID Card Form</button>
                        {isOn ? <IdCardForm /> : null}
                </div>
           
                
    
                <div className='cards-container'>
                    
                    {users.map((user, index) =>(
                        <IdCard userData={user} key={index} />
                    ))
                    }
                
                </div>
            </div>
            {/* <div>
                <IdCardForm onChange={onChange} onSubmit={handleSubmit}/>
            </div>*/}
           
     
        </div>
    );
}

 export default Home;