import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";




function App() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
  
  export default App;

//import IdCardForm from './IdCardForm.js';
{/*
function App() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
    
  
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

    }


  return (
        <div className="App">
            <h1>Id Cards</h1>
            <input className='search-box' placeholder='search ...' onInput = {filterCards}/>
        
            <div className='cards-container'>
                {users.map((user, index) =>(
                    <IdCard userData={user} key={index} />
                ))
                }
            
            </div>
            {/* <div>
                <IdCardForm onChange={onChange} onSubmit={handleSubmit}/>
            </div>
           
     
        </div>
    );
}export default App;
*/}




