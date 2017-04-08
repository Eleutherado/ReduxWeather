import React from "react";

export default function (props){
    return(
        <button type="button"
            className="btn btn-danger"
            onClick={() => props.onPress()}>{props.unit}</button>
    );
}
