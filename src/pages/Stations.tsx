import { useNavigate } from "react-router-dom";
import sec from "../assets/stations/secunderabad.jpg";
import nam from "../assets/stations/nampally.jpg";
import kac from "../assets/stations/kacheguda.jpg";
import lin from "../assets/stations/lingampally.jpg";
import cha from "../assets/stations/charlapalli.jpg";

function Stations() {

  const navigate = useNavigate();

  const stations = [
  { name: "Secunderabad", path: "secunderabad", img: sec },
  { name: "Nampally", path: "nampally", img: nam },
  { name: "Kacheguda", path: "kacheguda", img: kac },
  { name: "Lingampally", path: "lingampally", img: lin },
  { name: "Charlapally", path: "charlapally", img: cha }
];
  return (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      padding: "40px",
      textAlign: "center",
      color: "white",
    }}
  >
    <h1
      style={{
        fontSize: "42px",
        marginBottom: "10px",
        fontWeight: "bold",
        letterSpacing: "1px",
      }}
    >
      🚉 Indoor Railway Navigator
    </h1>

    <p style={{ marginBottom: "40px", fontSize: "18px", opacity: 0.9 }}>
      Select a station to explore the indoor navigation map
    </p>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      {stations.map((station) => (
        <div
          key={station.name}
          onClick={() => navigate("/" + station.path)}
          style={{
            width: "220px",
            background: "white",
            borderRadius: "15px",
            overflow: "hidden",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.boxShadow =
              "0 12px 30px rgba(0,0,0,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 8px 20px rgba(0,0,0,0.2)";
          }}
        >
          <img
            src={station.img}
            alt={station.name}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "15px" }}>
            <h3 style={{ color: "#333", fontSize: "20px" }}>
              {station.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Stations;