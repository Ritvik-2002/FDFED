import React from "react";
function Info(props) {
    return (
        <span>
            <center>
                <div id={props.id} class="counter">{props.number}</div>
                <div class="det">{props.details}</div>
            </center>
        </span>
    );
}
export default Info;