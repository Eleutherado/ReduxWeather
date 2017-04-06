import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherChart from "../components/weather_chart";

class WeatherList extends Component {
    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const temps = cityData.list.map(cityWeather => cityWeather.main.temp); // in kelvin.
        const humidity = cityData.list.map(cityWeather => cityWeather.main.humidity);
        const pressure = cityData.list.map(cityWeather => cityWeather.main.pressure);
        console.log(temps);
        console.log(humidity);
        console.log(pressure);
        return (
            <tr key={cityName}>
                <td>{cityName}</td>
                <td><WeatherChart data={temps} color="red" /></td>
                <td><WeatherChart data={pressure} color="green" /></td>
                <td><WeatherChart data={humidity} color="blue" /></td>
            </tr>

        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList)
