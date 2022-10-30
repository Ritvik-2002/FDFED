import React from 'react';

function Translatep(props) {
    return(
        <div className="vidContainer">
          <a href="/login" className ="img">
            <img src={props.source} alt="imag"  height = "250px" width = "350px"></img>
          </a>
          <div className="textArea">
            <br/>
            <h2>{props.heading}</h2>
            <p className="details">{props.details}</p>
            <h3>{props.teacher}</h3>
          </div>
        </div>
    );
}
export default Translatep;