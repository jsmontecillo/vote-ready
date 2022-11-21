import {useState, useEffect} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './header.js';
import la2 from './la2.jpg';
import LocationCard from './location-card';

const Locations = (props) => {
    const [locations, setLocations] = useState([]);
    const [searched, setSearched] = useState(false);
    const [data, setData] = useState(locations);

    useEffect(() => {
        fetch('/election-data.json')
        .then((response) => response.json())
        .then((data) => {
                console.log(data.pollingLocations);
                setLocations(data.pollingLocations);
            }) 
    }, []);
    console.log(locations);

    const handleSearch = async (e) => {
        e.preventDefault();
        setSearched(true);
        console.log(searched);
        let item = e.target.value;
        console.log(item);
        let result = locations.filter((data) => {
          return data.address.city.toLowerCase().startsWith(item.toLowerCase());
        });
        setData(result);
    }
  

    return (
        <div>
            {/* <Header title="Polling Locations" image={la2}/> */}
            <h3>Find Locations</h3>
            <form id="search" action="#" onSubmit={handleSearch}>
                <fieldset>
                    <label htmlFor="category-search">City</label>
                    <input className="box" type="text" id="category-search" onChange={handleSearch}/>
                </fieldset>
            </form>

            <div className="location-contain">
                <div className="location-child">
                    <h3>Results</h3>
                    {searched ? (data.map((item) => (
                        <LocationCard location={item} />
                    ))): (null)}
                </div>
                <div className="location-child">
                    {/*map goes here*/}
                </div>
            </div>
        </div>

    )
}

export default Locations;