import Papa from "papaparse";
import features from "../data/file.json";
import Oscar from '../cases_country.csv';

class LoadCountryTask {
  covid19DataUrl =
    "http://github.com/simpleFran/interactiveMap/blob/master/cases_country.txt";
  setState = null;

  load = (setState) => {
    this.setState = setState;
    Papa.parse(Oscar, {
      // delimiter: "",
      download: true,
      header: true,
      
      complete: (results) => {
        this.#processCovidData(results.data);
        console.log("RESULTADO:",results);
        
      },
      
    });
    this.setState = setState;
    setState(features);
  };

  #processCovidData = (covidCountries) => {
    console.log(covidCountries);
  };
}

export default LoadCountryTask;
