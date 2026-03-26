import React, { useState } from "react";
import "./country.css";
const Country = ({ country, handleVisitedCountries, HandleVisitedFlag }) => {
const [Visited, setVisited] = useState(false);
  const HandleVisited = ()=>{
    // basic way
    // if(Visited){
    //   setVisited(false)
    // } else{
    //   setVisited(true)
    // }
    // second way
    // setVisited(Visited ? false : true)
    // third way
    setVisited(!Visited)
    handleVisitedCountries(country)
  }
  return (
    <div className={`country ${Visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <div className="country-detail">
        <p>Name : {country.name.common}</p>
        <p>Population : {country.population.population}</p>
        <p>
          Area : {country.area.area}{" "}
          {country.area.area > 300000 ? "Big Country" : "Small Country"}
        </p>
        <button
        onClick={HandleVisited}>
          {Visited ? 'Visited' : 'Not visited'}
        </button>
        <button onClick={()=>HandleVisitedFlag(country.flags.flags.png)}>Add visited Flag</button>
      </div>
    </div>
  );
};

export default Country;
