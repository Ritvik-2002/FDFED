import React from 'react';
function Headingone(){
    return(
        <div class="header_middel">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="home_contact">
              <div class="contact_icone">
                <img src="image/icon/icon_phone.png" alt=""/>
            </div>
              <div class="contact_box">
                <p>For any queries :<a href="#contact-info">
                    <button type="button" class="btn btn-secondary btncont"> Contact us</button>
                  </a></p>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-3 col-4">
            <div class="logo">
              <a href="index.html"><img src="image/icon/logo.png" alt=""/></a>
            </div>
          </div>

          <div class="col-lg-5 col-md-7 col-6">
            <div class="middel_right">
              <div class="">
                <a class="get-started" href="/login">Log in</a>
              </div>
              <div>
                <a class="get-started" href="/facultylogin">Teach on MasterDsa</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
export default Headingone;