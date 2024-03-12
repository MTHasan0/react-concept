/* eslint-disable react/prop-types */

import CountryData from "./CountryData";


const CountryDetails = ({ country, handleVisitedCountries, handleVisitedFlags }) => {

   
    return (
        <div>
            <h2>Country Details</h2>
            <p>Country name: {country.name.common}</p>
            <CountryData
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            ></CountryData>
        </div>
    );
};

export default CountryDetails;