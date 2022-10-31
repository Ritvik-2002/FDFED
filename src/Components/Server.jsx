import React from "react";
import Head from './Head';
import Interactive from './Interactive';
import Style from './Styling';
import Translate from './Translate';
import Founders from './Founders';
import Portfolio from './Portfolio';
import Contactus from './Contactus';
import Newsletter from './Newsletter';
import Feedback from './Feedback';
import Sliding from './Slinding';
import Footer from './Footer';
function Server(){
    return(
        <><Head /><Interactive /><Translate /><Style /><Founders /><Portfolio /><Contactus /><Newsletter /><Feedback /><Sliding /><Footer /></>
    );
}
export default Server;