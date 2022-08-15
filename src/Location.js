const Location = ({location}) => {
    return (
        <div className="location">
            <p> Address:{location.street.number} {location.street.name} </p>
            <p >City:  {location.city} </p>
            <p> State: {location.state} </p>
            <p> Country:{location.country} </p>
        </div>
    )
}
export default Location;