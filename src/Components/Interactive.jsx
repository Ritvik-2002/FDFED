import React from "react";
function Interactive() {
    return (
        <div class="top">
            <video autoPlay loop muted class="backVideo">
                <source src="\video\backGround1.mp4" type="video/mp4" />
            </video>

            <div class="mainText">
                Learn DSA
                <div class="subText">
                    Best courses and instructors from all over the world
                </div>
            </div>
            <div class="mainText1">
                Interactive
                <div class="subText1">
                    Interactive and intutive site design
                </div>
            </div>
            <div class="butn">
                <button type="button" name="button" class="premiumBtn"><b>Buy Courses</b></button>
                <button type="button" name="button" class="premiumBtn startBtn"><b>Master Topics</b></button>
            </div>
        </div>

    );
}
export default Interactive;