import {useState, useEffect} from 'react';

const Locations = () => {
    const [locations, setLocations] = useState([]);

    const handleSubmit =  (e) => {
        e.preventDefault();
        fetch(`http://localhost:8888/locations`)
        .then((response) => { 
            if (response.ok) { // Checks server response (if there is one) 
                return response.json();
            } else {
                throw new Error("Bad response");
            }})
        .then((data) => 
            {
                console.log(data);
                const filtered = data.list.filter((i, index) => {
                    return index % 8 === 0 || index === 0;
                })
                console.log(filtered);
                setLocations(filtered);
            }) 
    
    }
    return (
        <h1>Locations</h1>
    )
}

export default Locations;