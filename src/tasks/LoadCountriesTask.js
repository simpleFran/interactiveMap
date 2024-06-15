import Papa from "papaparse";
// import {features as F} from "../data/file.json";
import { features } from "../data/file.json";
import _archive from "../cases_country.csv";

class LoadCountryTask {
  setState = null;
  // mapCountries = features;
  covidUrl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";
  load = (setState) => {
    this.setState = setState;

    Papa.parse(this.covidUrl, {
      // delimiter: "",
      download: true,
      header: true,

      complete: (result) => this.#processCovidData(result.data),
      // console.log(result);
    });
    // this.setState = setState;
    // setState(features);
  };

  #processCovidData = (covidCountries) => {
    // console.log(countryObj.length)
    for (let i = 0; i < features.length; i++) {
      const country = features[i];
      console.log(country);
      const covidCountry = covidCountries.find(
        (covidCountry) => country.properties.ISO_A3 === covidCountry.ISO3
      );

      country.properties.confirmed = 0;
      country.properties.confirmedText = 0;

      // if (covidCountry != null) {
      //   let confirmed = Number(covidCountry.Confirmed);
      //   country.properties.confirmed = confirmed;
      //   country.properties.confirmedText = this.#formatNumberWithCommas(
      //     confirmed
      //   );
      // }
      // this.#setCountryColor(country);
    }

    this.setState(features);
  };
  // #processCovidData = (covidCountries) => {
  //   for (let i = 0; i < features.length; i++) {
  //     const country = features[i];
  //     console.log('test:',country)
  //     const _covidCountry = covidCountries.find(
  //       (covidCountry) => covidCountry.ISO3 === country.properties.ISO_A3
  //     );
  //     //initialize this new property 'cofirmed'
  //     country.properties.confirmed = 0;
  //     country.properties.confirmedText = "0";
  //   }
  //   this.setState(features);
  // };
}

export default LoadCountryTask;
