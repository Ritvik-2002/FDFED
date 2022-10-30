import React from "react";
function Newsletter() {
  return (
    <div id="subinfo" class="newsletter_area newsletter_black">
      <pre>
      </pre>
      <div class="row mt-5">
        <div class="col-12">
          <div class="newsletter_content">
            <h2>Register for MasterDsa Newsletter's</h2>
            <p>Get E-mail of all the updates about our lastest and special discount's</p>
            <div class="subscibe_form">
              <form class="footer-newsletter">
                <input type="email" placeholder="Email address ..." autocapitalize="off" autocomplete="off" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <pre>
        </pre>
      </div>

    </div>
  );
}
export default Newsletter;