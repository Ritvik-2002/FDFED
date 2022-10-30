import React from 'react';
import InfoRepeat from './RepeatInfo';
import DS from '../DataSructures';
import Lang from '../Languages';
import OC from '../OtherCourses';
function Createinfo(names) {
    return (
        <InfoRepeat
            name={names.name}
        />
    );
}
function Headingtwo() {
    return (
        <div class="header_bottom sticky-header">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12">
                        <div class="main_menu_inner">
                            <div class="logo_sticky">
                                <a href="#"><img src="image/icon/logo.png" alt="logo" /></a>
                            </div>
                            <div class="main_menu">
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="#">Home <i></i></a>
                                        </li>
                                        <li>
                                            <a href="#coursesMSDA">Courses<i class="ion-chevron-down"></i></a>
                                            <ul class="mega_menu">
                                                <li>
                                                    <a href="/login">Data Structures</a>
                                                    <ul>
                                                        {DS.map(Createinfo)}
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a href="/login">Languages</a>
                                                    <ul>
                                                        {Lang.map(Createinfo)}
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a href="#">Other Courses</a>
                                                    <ul>
                                                        {OC.map(Createinfo)}
                                                    </ul>
                                                </li>

                                            </ul>
                                        </li>
                                        <li><a href="#team_section">Team</a></li>
                                        <li><a href="#coursesMSDA">Top Courses</a></li>
                                        <li><a href="#coursesMSDA">Find your new career</a></li>
                                        <li><a href="#subinfo">Subscribe</a></li>

                                        <li>
                                            <a href="#">Student Offers<i class="ion-chevron-down"></i></a>
                                            <ul class="sub_menu pages">
                                                <li><a href="#">Unlimited access</a></li>
                                                <li><a href="#">Q&A sessions</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="#portfolio-info">Portfolio</a></li>



                                        <li><a href="#footerinfo">Download</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Headingtwo;