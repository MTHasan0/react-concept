/* eslint-disable react/prop-types */

import { useState } from 'react';
import './Countries.css'
import CountryDetails from './CountryDetails';

// eslint-disable-next-line react/prop-types
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {

    // console.log(country);

    const { name, flags, cca2 } = country;
    const [visited, setVisited] = useState(false);


    const visitedHandler = () => {
        setVisited(!visited);


    }

    


    return (
        <div className={`country-container ${visited && 'visited'}`}>
            <p>Country name: {name.common}</p>
            <img src={flags.png} alt="" />
            <p>{cca2}</p>

            <button onClick={() => handleVisitedCountries(country)}>Mark as visited</button> <br />
            <button onClick={()=>handleVisitedFlags(country)}>Add Flag</button> <br />

            <button onClick={() => visitedHandler()}>{visited? 'Visited': 'Not yet'}</button>
            {
                visited ? 'I have visited' : "I'll go"
            }
            <hr />
            <CountryDetails
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            ></CountryDetails>
        </div>
    );
};

export default Country;