import {useState, useEffect} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import LocationCard from './location-card';
import './locations.css'
import Fade from 'react-reveal/Fade';

const Locations = (props) => {
    let t = props.t;
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
            <h3 style={{fontWeight: "900"}}>{t('find')}</h3>
            <form id="search" action="#" onSubmit={handleSearch}>
                <fieldset>
                    <label htmlFor="category-search">{t('city')}</label>
                    <input className="box" type="text" id="category-search" onChange={handleSearch}/>
                </fieldset>
            </form>

            <h3 style={{fontWeight: "900", fontSize: "40px", textAlign: "left", marginLeft: "50px"}}>{searched ? t('results') : null}</h3>
            <div className="location-contain">
                <div className="location-child">
                    {searched ? (data.map((item) => (
                        <Fade left>
                            <div>
                                <LocationCard location={item} t={t}/>
                            </div>
                        </Fade>
                    ))): (null)}
                </div>
            </div>
        </div>

    )
}

export default Locations;