import axios from "axios";
import { useState } from "react";
import "./WidgetStyles.css";

export default function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState("");

  const apiKey = "826d2128c73f42907ddda601b851d02f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  async function getCurrentWeather(e) {
    e.preventDefault();
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setTemp(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setDescription(response.data.weather[0].description);
      } else {
        throw new Error("Something went wrong!");
      }

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div>
          <form
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                getCurrentWeather(e);
              }
            }}
          >
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              className="search-input"
              placeholder="enter your city"
            />
            <button
              className="btn"
              onClick={(e) => getCurrentWeather(e)}
              type="submit"
            >
              Check
            </button>
          </form>
        </div>
        {temp && (
          <div>
            <h4 className="title">
              Current Temperature in <span> {`${city}`} </span>
            </h4>
            <p className="temperature">{Math.round(temp)}°C</p>

            <p className="title">Humidity: {humidity}</p>
            <p className="title">Description: {description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
