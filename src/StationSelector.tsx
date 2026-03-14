import { useState } from "react";

import sec from "./maps/secunderabad.svg";
import hyd from "./maps/hyderabad.svg";
import kac from "./maps/kacheguda.svg";
import lin from "./maps/lingampally.svg";
import beg from "./maps/begumpet.svg";

function StationSelector() {

  const [selectedStation, setSelectedStation] = useState<string | null>(null);

  const stations = [
    { name: "Secunderabad Station", map: sec },
    { name: "Hyderabad Station", map: hyd },
    { name: "Kacheguda Station", map: kac },
    { name: "Lingampally Station", map: lin },
    { name: "Begumpet Station", map: beg }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select Railway Station</h2>

      <div style={{ marginBottom: "20px" }}>
        {stations.map((station, index) => (
          <button
            key={index}
            onClick={() => setSelectedStation(station.map)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              cursor: "pointer"
            }}
          >
            {station.name}
          </button>
        ))}
      </div>

      {selectedStation && (
        <div>
          <h3>Station Map</h3>
          <img src={selectedStation} width="800" alt="Station Map" />
        </div>
      )}

    </div>
  );
}

export default StationSelector;