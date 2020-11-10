import React, {Component} from 'react';
import './Detailpage.css';

const Detailpage = () => {
    return(
        <React.Fragment>
            <center>
                <h1 style={{height:40}}>Restaurant Details Page</h1>
            </center>
            <div class="quickSearchContainer">
                <p class="quickSearchHeading">
                    Restaurant Details
                </p>
                <p class="quickSearchSubHeading">
                    Discover Your Favourite Restaurant
                </p>
                <div class="tilecontainer">
                    <div class="tileComponent1">
                        <img src="https://i.ibb.co/4dcvYRQ/priscilla-du-preez-W3-SEy-ZODn8-U-unsplash.jpg" className="imageclass"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            Continetal Dine Restaurant
                        </div>
                        <div class="componentSubHeading">
                            The Continental Food with 50% off on two drinks
                        </div>
                    </div>
                </div>
                <div class="tilecontainer">
                    <div class="tileComponent1">
                        <img src="two.jpg" className="imageclass"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            Fortune 500
                        </div>
                        <div class="componentSubHeading">
                            The best complimentary Food with 50% off
                        </div>
                    </div>
                </div>
                <div class="tilecontainer">
                    <div class="tileComponent1">
                        <img src="three.jpg" className="imageclass"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            Cafe-D
                        </div>
                        <div class="componentSubHeading">
                            Enjoy the best coffee with 50% off for two
                        </div>
                    </div>
                </div>
                <div class="tilecontainer">
                    <div class="tileComponent1">
                        <img src="four.jpg" className="imageclass"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            Escapbar
                        </div>
                        <div class="componentSubHeading">
                            Escape in the amazing Indo-American Restaurant
                        </div>
                    </div>
                </div>
                <div class="tilecontainer">
                    <div class="tileComponent1">
                        <img src="five.jpg" className="imageclass"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            PartieCafe
                        </div>
                        <div class="componentSubHeading">
                            The best deserts that you could witness
                        </div>
                    </div>
                </div>
                <div class="tilecontainer">
                    <div class="tileComponent1">
                        <img src="six.jpg" className="imageclass"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            Off-Street-Cafe
                        </div>
                        <div class="componentSubHeading">
                            Enjoy your Coffee with the best view around the city
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
   
export default Detailpage;