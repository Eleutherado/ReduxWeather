import _ from "lodash";
import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import { Cel, Far, Kel, HUMID, HPA } from "../containers/weather_list";


function average(data){
    return _.round(_.sum(data)/data.length);
}

function unitAvg(data, unit){
    if (unit === HUMID || unit === HPA){
        return average(data);
    }
    return adjustTempUnit(average(data), unit)
}

function adjustTempUnit(kelvinAvg, unit){
    if (unit === Cel){
        return kelvinAvg - 273;
    } else if (unit === Far) {
        return (( kelvinAvg - 273) * 9/5) + 32;
    } else {
        return kelvinAvg;
    }

}

export default function(props) {
    return(
        <div className="weatherChart">
            <Sparklines Width={180} Height={120} data={props.data}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{unitAvg(props.data, props.unit)} {props.unit}</div>
        </div>
    );
}
