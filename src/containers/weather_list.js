import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherChart from "../components/weather_chart";
import TempButton from "../components/temp_button";
import GoogleMap from "../components/google_map";



//HTML unit symbol Constants for temperature
export const Cel = "C"; //celcius
export const Far = "F"; //Farenheit
export const Kel = "K"; //Kelvin

// unit constants for pressure and humidity
export const HPA = "hPa";
export const HUMID = "%";


class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempUnit: Kel
        }

        this.setTempUnit = this.setTempUnit.bind(this);
        this.renderWeather = this.renderWeather.bind(this);

    }

    setTempUnit(unit){
        this.setState({tempUnit: unit})

    }

    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const temps = cityData.list.map(cityWeather => cityWeather.main.temp); // in kelvin.
        const humidity = cityData.list.map(cityWeather => cityWeather.main.humidity);
        const pressure = cityData.list.map(cityWeather => cityWeather.main.pressure);
        const { lon, lat } = cityData.city.coord;


        return (
            <tr key={cityName}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><WeatherChart data={temps} color="red" unit={this.state.tempUnit} /></td>
                <td><WeatherChart data={pressure} color="green" unit={HPA} /></td>
                <td><WeatherChart data={humidity} color="blue" unit={HUMID} /></td>
            </tr>

        );
    }
    render() {
        console.log()
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature ({this.state.tempUnit})
                        <div className="btn-group btn-group-justified" role="group">
                        <TempButton onPress = {() => this.setTempUnit(Kel)} unit={Kel} />
                        <TempButton onPress = {() => this.setTempUnit(Cel)} unit={Cel} />
                        <TempButton onPress = {() => this.setTempUnit(Far)} unit={Far} />
                        </div>
                        </th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
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
