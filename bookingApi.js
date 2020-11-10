import React,{ Component } from 'react';
import axios from 'axios';
import ViewBooking from './bookingDisplay';

const ourl = "http://developerfunnelrestapi.herokuapp.com/orders"

class BookingOrders extends Component{
    constructor(){
        super()

        this.state ={
            orders:''
        }
    }

    render(){
        return(
            <div className="container">
                <ViewBooking orderData={this.state.orders}/>
            </div>
        )
    }

    componentDidMount(){
        axios.get(ourl)
        .then((res) => {this.setState({orders:res.data})})
    }
}

export default BookingOrders;