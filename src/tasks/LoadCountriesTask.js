import papa from "papaparse";
import features from "../data/file.json";

class LoadCountryTask {
  covid19DataUrl =
    "https://github.com/CSSEGISandData/COVID-19/blob/web-data/data/cases_country.csv";
  setState = null;

  load = (setState) => {
    this.setState = setState;
    papa.parse(this.covid19DataUrl, {
      download: true,
      header: true,
      complete: (result) => {
        console.log(result);
        this.#processCovidData(result.data);
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
