import dataPeru from "./data/peru.js";
import dataByCountry from "./data/byCountry.js";
import listAllCountries from "./data/listCountries.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
    dataPeru();
    listAllCountries();
});

d.addEventListener("click", (e) => {
    dataByCountry(e,".byCountryBtn");
})

