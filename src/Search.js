import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [sentence, setSentence] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=34b734b8fe98139b171f0fae0dc3bc5c&units=metric`;

  useEffect(() => {
    if (temperature == null) {
      return;
    }
    const iconLink = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    setSentence(
      <ul>
        <li>Temperature: {Math.round(temperature)}°C</li>
        <li>Condition: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {humidity} km/h</li>
        <li>
          <img src={iconLink} alt="new" />
        </li>
      </ul>
    );
  }, [temperature, description, humidity, wind, icon]);

  function updateState(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(updateState);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <h2>{sentence}</h2>
    </div>
  );
}
