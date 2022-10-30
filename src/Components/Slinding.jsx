import React from "react";

function Sliding(){
    return(
        // eslint-disable-next-line jsx-a11y/no-distracting-elements
        <marquee style={{background: "linear-gradient(to right, #FA4B37, #DF2771)", marginTop: "50px"}} direction="left" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="20">
      <div class="marqu">“If you have choosen the right data structures and organized things well, the algorithms will almost be self-evident. Data Structures, not algorithms are central to programming”</div>
    </marquee>
    );
}
export default Sliding;