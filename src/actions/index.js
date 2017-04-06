import axios from 'axios'; // for AJAX requests

const W_API_KEY= "1a3ce7c09691716ca1e430c37774a7e9";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${W_API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

// Action Creator
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log(request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
