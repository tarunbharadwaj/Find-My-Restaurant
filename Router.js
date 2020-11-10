import React, { Component } from 'react';
import {BrowserRouter,Route, Switch, Redirect} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ListingApi from './ListingApi';
import Restapi from './RestaurantApi';
import BookingOrders from './bookingApi';
import BookingForm from './bookingForm';
//above lines we import-name can be anything but should be same as component name below and from-the file name of the component
// import Tabrouters from './TabRouters';


const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                {/* <Tabrouters/> */}
                <Route exact path='/' component={Main}></Route>
                <Route path='/list/:id' component={ListingApi}></Route>
                <Route path='/orders' component={BookingOrders}></Route>
                <Route path='/booking/:id' component={BookingForm}></Route>
                <Route path='/restaurantdetails/:id' component={Restapi}></Route>
                <Footer/>
            </div>
        </BrowserRouter>
        
    )
}

export default Router;