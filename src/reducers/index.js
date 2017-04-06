import { combineReducers } from 'redux';
import WeatherReducer from "./weather_reducer"

const rootReducer = combineReducers({
  Weather: WeatherReducer
});

export default rootReducer;
