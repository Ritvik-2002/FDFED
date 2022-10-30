import React from "react";
function Contactus() {
    return (
        <div>
            <center id="contact-info">
                <p className="contactStyle" style={{ fontSize: "50px", padding: "100px" }}>Contact Us</p>
            </center>
            <div className="diffSection" id="contactus_section">

                <div class="back-contact">
                    <div class="cc">
                        <form action="mailto:masterdsa.help@gmail.com" method="post" enctype="text/plain">
                            <label>First Name <span class="imp">*</span></label><label style={{marginLeft: "185px"}}>Last Name <span class="imp">*</span></label><br />
                            <center>
                                <input type="text" name="" style={{ marginRight: "10px", width: "175px" }} required="required" /><input type="text" name="lname" style={{ width: "175px" }} required="required" /><br />
                            </center>
                            <label>Email <span className="imp">*</span></label><br />
                            <input type="email" name="mail" style={{ width: "100%" }} required="required" /><br />
                            <label>Message <span class="imp">*</span></label><br />
                            <input type="text" name="message" style={{ width: "100%" }} required="required" /><br />
                            <label>Additional Details</label><br />
                            <textarea name="addtional"></textarea><br />
                            <button type="submit" id="csubmit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Contactus;