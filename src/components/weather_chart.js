import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default function(props) {
    return(
        <div className="weatherChart">
            <Sparklines svgWidth={180} svgHeight={120} data={props.data}>
            <SparklinesLine color={props.color} />
            </Sparklines>
        </div>
    );
}
