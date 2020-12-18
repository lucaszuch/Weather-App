import React from "react";

const Weather = ({
  city,
  country,
  temperature,
  humidity,
  description,
  wind,
  error
}) => {

  const degreesF = ((temperature * 1.8) + 32);

  return (
    <div className="weather_info">
      {city && country && (
        <p className="weather_key">
          Location:{""}
          <span className="weather_value">
            {""}
            {city}, {country}
          </span>
        </p>
      )}

    {temperature && (
          <p className="weather_key">
            Temperature: <span className="weather_value"> {(temperature).toFixed(1)} °C or {(degreesF).toFixed(1)} °F</span>
          </p>
    )}

    {humidity && (
          <p className="weather_key">
            Humidity: <span className="weather_value"> {humidity}%</span>
          </p>
    )}

    {description && (
          <p className="weather_key">
            Description: <span className="weather_value"> {description}</span>
          </p>
    )}

    {wind && (
          <p className="weather_key">
            Wind: <span className="weather_value"> {wind} km/h</span>
          </p>
    )}

    {error && <p className="weather_error">{error}</p>}
    </div>
  );
};

export default Weather;