import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";
import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [focussedEarthquake, setFocussedEarthquake] = useState({});
  const [size, setSize] = useState(1);
  const [featurecache, setFeaturecache] = useState([]);
  const [zeitintervall, setZeitintervall] = useState("hour");
  const [magnitude, setMagnitude] = useState("significant");

  // Syntax:
  useEffect(
    () => {
      fetch(
        `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magnitude}_${zeitintervall}.geojson`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((res) => setFeaturecache(res))
        .catch((err) => console.error("Fetch failed:", err));
    },
    [magnitude, zeitintervall] // Abhängigkeitsliste, hier leer
  );

  const BASEURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/";
  // Die URLs der Feeds findest du auf dieser Webseite (rechte Seitenleiste):  https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

  return (
    <div className="app">
      <Header setZeitintervall={setZeitintervall} setMagnitude={setMagnitude} />
      <Sidebar earthquake={focussedEarthquake} size={size} setSize={setSize} />
      <div className="mainArea">
        <Map
          size={size}
          setSize={setSize}
          setFocussedEarthquake={setFocussedEarthquake}
          featurecache={featurecache}
        />
      </div>
    </div>
  );
}

export default App;
