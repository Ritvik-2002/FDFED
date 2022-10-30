import React from "react";
function Feedback() {
    const [name,nameChange] = React.useState("");
    const [final,submitchange] = React.useState("");
    function Submit(event){
        submitchange("Thank you for your Valuable Feedback "+ name);
        event.preventDefault();
    }
    function Change(event){
        nameChange(event.target.value);
    }
    return (
        <div class="feedbox">
            <div class="title2" id="feedBACK">
                <span>Give Feedback</span>
                <div class="shortdesc2">
                    <p>Please share your valuable feedback to us</p>
                </div>
            </div>
            <div class="feed">
                <form action="mailto:masterdsa.help@gmail.com" method="post" enctype="text/plain" onSubmit={Submit} value={name}>
                    <h2 style={{color:"red"}}>{final}</h2>
                    <label>Your Name</label><br />
                    <input type="text" name="" class="fname" required="required" onChange={Change} /><br />
                    <label>Email</label><br />
                    <input type="email" name="mail" required="required" /><br />
                    <label>Additional Details</label><br />
                    <textarea name="addtional"></textarea><br />
                    <button type="submit" id="csubmit">Send Message</button>
                </form>
            </div>
        </div>

    );
}
export default Feedback;