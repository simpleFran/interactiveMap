import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "./CovidMap.css";
const MainMap = ({ countries }) => {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };
  // console.log(countries);
  const position1 = [-22.1975, -44.9726];
  // const position2 = [-30.0277, -51.2287];
  // const rockIcon = new Icon({
  //   iconUrl: "/images/rock.png",
  //   iconSize: [16, 17],
  //   iconAnchor: [22, 94],
  //   popupAnchor: [-10, -86],
  // });
  // const chickenIcon = new Icon({
  //   iconUrl: "/images/chicken.png",
  //   iconSize: [16, 17],
  //   iconAnchor: [22, 94],
  //   popupAnchor: [-10, -86],
  // });
  // onEachFeature={onEachFeature}
  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmed = country.properties.confirmedText;
    layer.bindPopup(`${name} ${confirmed}`);
  };
  return (
    <MapContainer
      center={position1}
      zoom={3}
      style={{ height: "90vh" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
};

export default MainMap;
