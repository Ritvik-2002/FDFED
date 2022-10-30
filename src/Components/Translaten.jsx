import React from "react";
function Translaten(props){
    return(
        <div className="vidContainer" >
          <div className="textArea">
            <br/>
            <h2>{props.heading}</h2>
            <p className="details">{props.details}</p>
            <h3>{props.teacher}</h3>
          </div>
          <a href="/login">
            <img src={props.source} alt="" height = "250px" width = "350px"></img>
          </a>
        </div>
    );
}
export default Translaten;