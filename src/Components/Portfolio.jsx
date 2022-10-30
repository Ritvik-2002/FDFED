import React from "react";
import Info from "./Info";
function Portfolio() {
    return (
        <div>
            <center id="portfolio-info">
                <p style={{ fontSize: "50px", padding: "100px", paddingBottom: "40px" }}>Portfolio</p>
            </center>
            <div className="diffSection" id="portfolio_section">
                <div className="content">
                    <p>
                        “Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” “Your attitude, not your aptitude, will determine your altitude.” “If you think education is expensive, try ignorance.” “The only person who is
                        educated is the one who has learned how to learn …and change.”
                    </p>
                </div>
            </div>
            <div class="extra">
                <p>We're increasing this data every year</p>
                <div class="smbox">
                    <Info
                        id="counter1"
                        number="407"
                        details="Enrolled Students"
                    />
                    <Info
                        id="counter2"
                        number="348"
                        details="Total Courses"
                    />
                    <Info
                        id="counter3"
                        number="356"
                        details="Placed Students"
                    />
                    <Info
                        id="counter4"
                        number="317"
                        details="Total Internships"
                    />
                </div>
            </div>
        </div>
    );
}
export default Portfolio;