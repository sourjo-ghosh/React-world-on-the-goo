import { use, useState } from "react";
import "./countries.css";
import Country from "../Country/country.jsx";
export default function Countries({ CountriesPromise }) {
  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;
  const [CountriesVisited, setCountriesVisited] = useState([]);
  const handleVisitedCountries = (country) => {
    const alreadyVisited = CountriesVisited.find(
      (c) => c.ccn3.ccn3 === country.ccn3.ccn3,
    );
    
    if (alreadyVisited) return;
    const NewCountriesVisited = [...CountriesVisited, country];
    setCountriesVisited(NewCountriesVisited);
  };
  const [VisitedFlag, setVisitedFlag] = useState([]);
  const HandleVisitedFlag = (CountryFlag)=>{
    const alreadyVisitedFlag = VisitedFlag.find(
      (F) => F === CountryFlag)
  
    if (alreadyVisitedFlag) return;
    const NewVisitedFlag = [...VisitedFlag, CountryFlag]
    setVisitedFlag(NewVisitedFlag)
  }
  return (
    <>
      <div className="countries">
        <h1>Countries : {countries.length}</h1>
        <h4>Total country visited : {CountriesVisited.length}</h4>
        <ol>
          {CountriesVisited.map((country) => (
            <li key={country.ccn3.ccn3}>{country.name.common}</li>
          ))}
          </ol>
          <div className={`flag-container ${VisitedFlag.length === 0 ? '' : 'flag-container-active'}`}>
          {
            VisitedFlag.map((flag, index) => <img key={index} src={flag} alt="" />)
          }
          </div>
      </div>
      <div className="countryContainer">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            HandleVisitedFlag={HandleVisitedFlag}
          />
        ))}
      </div>
    </>
  );
}
