import React from "react";
function Footer() {
    return (
        <footer>
            <div id="footerinfo" class="footer-container">
                <div class="left-col">
                    <img src="image/icon/logo - copy.png" style={{width: "200px"}} />
                    <div class="logo"></div>
                    <div class="social-media">
                        <a href="#"><img src="image/icon\fb.png" /></a>
                        <a href="#"><img src="image/icon\insta.png" /></a>
                        <a href="#"><img src="image/icon\tt.png" /></a>
                        <a href="#"><img src="image/icon\ytube.png" /></a>
                        <a href="#"><img src="image/icon\linkedin.png" /></a>
                    </div><br /><br />
                    <p class="rights-text">Copyright © 2022 Created By IIITS students, All Rights Reserved.</p>
                    <br />
                    <p><img src="image/icon/location.png" /> Indian Institute of Information Technology<br />Sricity, Andhra Pradesh</p><br />
                    <p><img src="image/icon/phone.png" /> +91 9959458697<br /><img src="image/icon/mail.png" />&nbsp; masterdsa.help@gmail.com</p>
                </div>

                <div class="right-col">

                    <div class="icon-play">
                        <div class="icontxt">
                            <h5 class="texticon">Experience Best Features of MasterDsa</h5>
                        </div>
                        <br /><br />
                        <div class="">
                            <img class="icon icon1" src="image/icon/icon1.png" alt="img" />
                        </div>
                        <div class="">
                            <img class="icon icon2" src="image/icon/icon2.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;