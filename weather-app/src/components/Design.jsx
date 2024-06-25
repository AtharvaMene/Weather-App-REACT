import React from "react";
import styles from "./../Design.css";
const Design = () => {
  return (
    <div>
      <div id="main-content">
        <h1>Weather Forecast</h1>
        <div className="Header">
          <h1>Location</h1>
          <button className="button">Change Location</button>
        </div>
        <h2>India</h2>
        <h3>Date & time</h3>
        <div className="main-temp">mostly Cloudy</div>
        <div>up & down</div>
        <div id="degree">31C</div>
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
                  <td>day</td>
                  <td>date</td>
                  <td>conditon</td>
                  <td>high</td>
                  <td>low</td>
                </tr>

                <tr>
                  <td>day</td>
                  <td>date</td>
                  <td>conditon</td>
                  <td>high</td>
                  <td>low</td>
                </tr>
                <tr>
                  <td>day</td>
                  <td>date</td>
                  <td>conditon</td>
                  <td>high</td>
                  <td>low</td>
                </tr>

                <tr>
                  <td>day</td>
                  <td>date</td>
                  <td>conditon</td>
                  <td>high</td>
                  <td>low</td>
                </tr>
                <tr>
                  <td>day</td>
                  <td>date</td>
                  <td>conditon</td>
                  <td>high</td>
                  <td>low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="details">
          <h2>Details</h2>
          <div id="real-feel">
            <span>Real Feel</span> <span>36</span>{" "}
          </div>
          <div id="humidity"></div>
          <div id="visibility"></div>
          <div id="uv-index"></div>
        </div>
      </div>
    </div>
  );
};

export default Design;
