import "./App.css";
import Countries from "./Components/Countries/countries.jsx";
import { Suspense } from "react";
const CountriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());
function App() {
  return (
    <>
      <Suspense
        fallback={<div style={{ fontSize: "20px" }}>Data Loading...</div>}
      >
        <Countries CountriesPromise={CountriesPromise}></Countries>
      </Suspense>
    </>
  );
}




export default App;
