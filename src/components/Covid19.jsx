import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import MainMap from "./MainMap";
import Legend from "./Legend";
import LoadCountryTask from "../tasks/LoadCountriesTask";

const Covid19 = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const loadCountriesTask = new LoadCountryTask();
    loadCountriesTask.load(setCountries);
  }, [countries]);
  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <MainMap countries={countries} />
          <Legend />
        </div>
      )}
    </div>
  );
};

export default Covid19;
