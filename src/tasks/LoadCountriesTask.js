import papa from "papaparse";
import features from "../data/file.json";

class LoadCountryTask {
  covid19DataUrl =
    "https://github.com/simpleFran/interactiveMap/blob/master/cases_country.csv";
  setState = null;

  load = (setState) => {
    this.setState = setState;
    papa.parse(this.covid19DataUrl, {
      delimiter: "",
      download: true,
      header: true,
      // downloadRequestBody:undefined,
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
