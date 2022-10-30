import React from "react";
import Translatep from "./Translatep";
import Translaten from "./Translaten";
// import ''
function Translate() {
    return (
        <div className="mid">
            <div className="gradBlueToPink">
                <center>
                    <p style={{ color: "white", fontSize: "50px", padding: "100px 0 0 0" }}>Check out our Courses</p>
                </center>
                <div className="videos">
                    <Translatep
                        source="\image\courses\course2.png"
                        heading="Master the C Language"
                        details="C Programming will increase career options. Become a better dev in other languages by learning C. Pointers explained"
                        teacher="Instructor : Dr. Anushree Bablani"
                    />
                    <Translaten
                        heading="Java Programming Bootcamp"
                        details="Learn Java In This Course And Become a Computer Programmer. Obtain valuable Core Java Skills And Java Certification"
                        teacher="Instructor : Dr. Subu"
                        source="\image\courses\course4.png"
                    />
                    <Translatep
                        source="\image\courses\course5.png"
                        heading="Python Bootcamp Zero to Hero"
                        details="Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!"
                        teacher="Instructor : Dr. Bheemappa Halavar"
                    />
                    <Translaten
                        heading="C Programming For Beginners"
                        details="C Programming will increase career options. Become a better dev in other languages by learning C. Pointers explained"
                        teacher="Instructor : Dr. Himangshu Sarma"
                        source="\image\courses\course6.png"
                    />
                    <Translatep
                        source="\image\courses\course9.png"
                        heading="Full Stack Development"
                        details="COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!"
                        teacher="Instructor : Dr. Amit Praseed"
                    />
                    <Translaten
                        heading="Flutter Development for begginers"
                        details="A Complete Guide to the Flutter SDK & Flutter Framework for building native iOS and Android apps"
                        teacher="Instructor : Dr. Neha Agarwal"
                        source="\image\courses\course11.png"
                    />
                </div>
            </div>
        </div>
    );
}
export default Translate;