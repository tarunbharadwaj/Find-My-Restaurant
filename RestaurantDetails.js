import React from 'react';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Restaurantdetails.css'

const Restdetail = (props) => {

    const renderHotel = ({resData}) => {
        if(resData){
            return resData.map((item) => {
                return(
                    <div className="row">
                        <div className="col-md-12 main-text">
                            <div className="col-md-9">
                                <div className="title">
                                    <div className="name-content">
                                        {item.name}
                                    </div>
                                    <div>
                                        <img className="img-content" src={item.thumb} style={{width:600,height:500}}/>
                                        <button  className="gallery" type="button" data-toggle="modal" data-target="#myModal">
                                            Gallery
                                        </button>
                                    </div>
                                    <div id="myModal" class="modal fade" role="dialog">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                <h4 class="modal-title">Pictures of {item.name} Restaurant</h4>
                                            </div>
                                            <div class="modal-body">
                                                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                                    <ol class="carousel-indicators">
                                                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                                        <li data-target="#myCarousel" data-slide-to="1"></li>
                                                        <li data-target="#myCarousel" data-slide-to="2"></li>
                                                    </ol>
                                                    <div class="carousel-inner">
                                                        <div class="item active">
                                                            <img src={item.thumb} style={{width:570,height:500}}/>
                                                        </div>
                                                        <div class="item">
                                                            <img src={item.thumb} style={{width:570,height:500}}/>
                                                        </div>
                                                        <div class="item">
                                                            <img src={item.thumb} style={{width:570,height:500}}/>
                                                        </div>
                                                    </div>
                                                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                                        <span class="glyphicon glyphicon-chevron-left"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                                        <span class="glyphicon glyphicon-chevron-right"></span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default btn-danger" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="text-content">
                                        {item.locality}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 side-nav">
                                <div className="nav-content">
                                    <Tabs>
                                        <TabList>
                                            <Tab className="tab-content">Cuisines</Tab>
                                            <Tab className="tab-content">Mealtype</Tab>
                                            <Tab className="tab-content">Details</Tab>
                                        </TabList>
                                        <TabPanel className="tab-panel">
                                            <span className="cuisine-content">Cuisine</span><br/>
                                            <span>{item.Cuisine[0].name} | </span>
                                            <span>{item.Cuisine[1].name}</span>
                                        </TabPanel>
                                        <TabPanel className="tab-panel">
                                            <span className="cuisine-content">Mealtype </span><br/>
                                            <span>{item.type[0].name} | </span>
                                            <span>{item.type[1].name}</span>
                                        </TabPanel>
                                        <TabPanel className="tab-panel">
                                            <span className="cuisine-content">Cost </span><br/>
                                            <span>₹ {item.cost} | </span>
                                            <span>{item.contact}</span>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                                <div>
                                    <Link to={`/booking/${item._id}`} type="button" class="btn btn-default btn-danger" data-dismiss="modal">Place Order</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }else{
            return(
                <center className="loadingRx">
                    <h3>LOADINGG......</h3>
                </center>
            )
        }
    }

    return(
        <React.Fragment>
           {renderHotel(props)}
        </React.Fragment>
    )
} 


export default Restdetail;