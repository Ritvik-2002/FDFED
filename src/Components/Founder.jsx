import React from "react";
function Founder(props){
    return(
        <div class="flip-card">
                 
          <a href="">
            <div class="flip-card-inner">
              <div class="flip-card-front">

                <img src={props.src} alt="Avatar" style={{width:"175px",height:"175px",borderRadius:"50%"}}/>
                <br/><br/>
                <h4>{props.name}</h4>
              </div>
              <div class="flip-card-back">
                <h4>{props.name_1}</h4>
                <br/><br/>
                <p>{props.info}</p>
              </div>
            </div>
          </a>
        </div>
    );
}
export default Founder;