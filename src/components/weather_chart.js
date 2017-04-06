import _ from "lodash";
import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default function(props) {
    return(
        <div className="weatherChart">
            <Sparklines svgWidth={180} svgHeight={120} data={props.data}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)}</div>
        </div>
    );
}
