import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Listing.css';

const Listing = (props) => {

    const renderList = ({displaydata}) => {
        if(displaydata){
            return displaydata.map((item) => {
                return(
                    <div className="item" key={item._id}>
                    {/* Title part */}
                        <div className="row">
                            {/* img and restaurant part */}
                            <div className="col-md-6">
                                <img className="image" src={item.thumb}/>
                            </div>
                            <div className="col-md-6">
                                <div className="hotel_name">
                                    <Link className="hotel_name" to={`/restaurantdetails/${item._id}`}>{item.name}</Link>
                                </div>
                                <div className="city_name">
                                    {item.cityname}
                                </div>
                                <div className="address-text">
                                    {item.address}
                                </div>
                                <div className="address-text">
                                    {item.locality}
                                </div>
                                <div className="icons">
                                    <span className="icon glyphicon glyphicon-facetime-video"></span>
                                    <span> --- </span>
                                    <span>VideoGraphy Allowed</span>
                                </div>
                                <div className="icons">
                                    <a href="https://api.whatsapp.com/send/?phone=917397237457&text&app_absent=0" className=" icon glyphicon glyphicon-send"></a>
                                    <span> --- </span>
                                    <span>WhatsApp Chat Support</span>
                                </div>
                                <div className="icons">
                                    <span className="icon glyphicon glyphicon-star"></span>
                                    <span className="icon glyphicon glyphicon-star"></span>
                                    <span className="icon glyphicon glyphicon-star"></span>
                                    <span className="icon glyphicon glyphicon-star-empty"></span>
                                    <span> --- </span>
                                    <span>Stars</span>
                                </div>
                            </div>
                        </div>
                        {/* price and cuisine etc part */}
                        <div className="row">
                            <div className="col-md-3">
                                <div className="CUISINES-COST-FOR-TWO">
                                    Cost Per Two
                                </div>
                                <div className="CUISINES-COST-FOR-TWO">
                                    Cuisine
                                </div>
                                <div className="CUISINES-COST-FOR-TWO">
                                    Contact Us
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="cuisine_out">
                                    ₹ {item.cost} || 
                                    <span><a className="cuisine_out" href="https://www.xe.com/currencyconverter/">Convert Your Rates</a></span>
                                </div>
                                <div className="cuisine_out">
                                    {item.Cuisine[0].name} | {item.Cuisine[1].name}
                                </div>
                                <div className="cuisine_out">
                                    <span className="icon glyphicon glyphicon-phone"></span>
                                    <span> ---- </span>
                                    {item.contact_number}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }else{
            return(
                <div>
                    <center className="loadingLx">
                        <h3>LOADINGG......</h3>
                    </center>
                </div>
            )
        }
    }

    return(
        <div>
            <div className="row">
                <div className="col-md-12">
                    {renderList(props)}
                </div>
            </div>
        </div>
    )
}

export default Listing;