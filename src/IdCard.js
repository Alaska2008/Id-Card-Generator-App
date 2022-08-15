import Location from './Location.js';
import PhoneNumber from './PhoneNumber.js';
import './IdCard.css';


const IdCard =({ userData }) =>{
    
    
  

    return (
        <div className="card">
            <div className='header'>World Wide Unique Identity Card</div>
            <img  src={`https://countryflagsapi.com/png/${userData.location.country}`} width='50 ' height='32' style={{verticalAlign:middle}}/> 
            <hr  className='line'/>
            <br/>
            <div className="title">Name: {userData.name.first} {userData.name.last} </div>
            <br/>
            <br/>
            <div className="card_body">
                <div className="card_image"> <img src={userData.picture.medium} alt="User" /></div>
                <Location location={userData.location} />
                <PhoneNumber type="Home" number={userData.phone} />
                <PhoneNumber type="Mobile" number={userData.cell} /> 
            </div>
        </div>
    )
}
export default IdCard;