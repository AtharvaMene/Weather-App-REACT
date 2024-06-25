import React, { useEffect, useState } from "react";
  import axios from "axios";
import styles from "./../Design.css";
const Report = () => {
  const [weather, setWeather] = useState([]);

  async function getReport() {
    const options = {
      method: 'GET',
      url: 'https://yahoo-weather5.p.rapidapi.com/weather',
      params: {
        location: 'mumbai',
        format: 'json',
        u: 'c'
      },
      headers: {
        'x-rapidapi-key': '20b81cf63bmsh47f8913184d1080p11480cjsnab7b26ac0926',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setWeather([response.data]);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getReport();
  }, []);
  return (
    <>
      {weather.map((report) => (
        <div id="whole-page">
          <div id="main-content">
            <h1>Weather Forecast</h1>
            <div className="Header">
              <br />
              <h1>{report.location.city}</h1>
              <button className="button">Change Location</button>
            </div>

            <h2>{report.location.country}</h2>

            <h3>{report.location.timezone_id}</h3>
            <div className="main-temp">
              <h2>{report.current_observation.condition.text}</h2>
            </div>
            <div id="high-low">
              <h3>
                <span>High:</span>
                {report.forecasts[0].high}
              </h3>
              <h3>
                <span>Low:</span>
                {report.forecasts[0].low}
              </h3>
            </div>
            <div id="degree">
              <h1>{report.current_observation.condition.temperature}°c</h1>
            </div>
          </div>
          <div id="other-deatils">
            <div id="forecast">
              <h2>Forecast</h2>
              <div id="forecast-details">
                <table id="forecast-table">
                  <thead>
                    <th>Days</th>
                    <th>Date</th>
                    <th>Condition</th>
                    <th>High</th>
                    <th>Low</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{report.forecasts[0].day}</td>
                      <td>16/06/2024</td>
                      <td>{report.forecasts[0].text}</td>
                      <td>{report.forecasts[0].high}</td>
                      <td>{report.forecasts[0].low}</td>
                    </tr>

                    <tr>
                      <td>{report.forecasts[1].day}</td>
                      <td>17/06/2024</td>
                      <td>{report.forecasts[1].text}</td>
                      <td>{report.forecasts[1].high}</td>
                      <td>{report.forecasts[1].low}</td>
                    </tr>
                    <tr>
                      <td>{report.forecasts[2].day}</td>
                      <td>18/06/2024</td>
                      <td>{report.forecasts[2].text}</td>
                      <td>{report.forecasts[2].high}</td>
                      <td>{report.forecasts[2].low}</td>
                    </tr>
                    <tr>
                      <td>{report.forecasts[3].day}</td>
                      <td>19/06/2024</td>
                      <td>{report.forecasts[3].text}</td>
                      <td>{report.forecasts[3].high}</td>
                      <td>{report.forecasts[3].low}</td>
                    </tr>
                    <tr>
                      <td>{report.forecasts[4].day}</td>
                      <td>20/06/2024</td>
                      <td>{report.forecasts[4].text}</td>
                      <td>{report.forecasts[4].high}</td>
                      <td>{report.forecasts[4].low}</td>
                    </tr>
                    <tr>
                      <td>{report.forecasts[5].day}</td>
                      <td>21/06/2024</td>
                      <td>{report.forecasts[5].text}</td>
                      <td>{report.forecasts[5].high}</td>
                      <td>{report.forecasts[5].low}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div id="details">
              <h2>Details</h2>
              <div id="real-feel">
                <span>Real Feel</span>{" "}
                <span>
                  {report.current_observation.condition.temperature}°c
                </span>
              </div>
              <div id="humidity">
                <span>Humidity</span>
                <span>{report.current_observation.atmosphere.humidity}%</span>
              </div>
              <div id="visibility">
                <span>Visibility</span>
                <span>
                  {report.current_observation.atmosphere.visibility}miles
                </span>
              </div>
              <div id="uv-index">
                <span>Wind Speed</span>
                <span>{report.current_observation.wind.speed}mph WNW</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Report;

// {
//   weather.map((report) => <p>{report.location.city}</p>);
// }
