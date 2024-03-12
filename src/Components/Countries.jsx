import { useEffect, useState } from "react";
import Country from "./Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);




    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const handleVisitedCountries = country => {

        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);


    }

    const handleVisitedFlags = flag => {

        const newVisitedFlags = [...visitedFlags, flag];

        setVisitedFlags(newVisitedFlags);

    }

    return (
        <div className="">
            <p>Length: {countries.length}</p>


            <div>
                <p>Visited Countries: {visitedCountries.length}</p>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }


                </ul>

            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag.flags.png}></img>)
                }
            </div>
            <div className="countries-container">
                {
                    countries.map(country => <Country country={country} key={country.cca2}
                        handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)

                }
            </div>

        </div>
    );
};

export default Countries;