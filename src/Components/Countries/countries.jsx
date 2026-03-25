import {use} from "react";
import "./countries.css";
import Country from "../Country/country.jsx";
export default function Countries ({CountriesPromise}) {
  const countriesData = use(CountriesPromise)
  const countries = countriesData.countries;
  // console.log(countries)
  return (
      <>
      <div className="countries">
        <h1>Countries</h1>
      </div>
        <div className="countryContainer">
        {
          countries.map(country => <Country
              key={country.ccn3.ccn3}
              country={country} />)
        }
        </div>
      </>
  )
}
