import React,{Component} from 'react';
import axios from 'axios';
import Restdetail from './RestaurantDetails';

const url = "https://developerfunnelrestapi.herokuapp.com/restaurantdetails"

class Restapi extends Component{
    constructor(props){
        super()

        this.state={
            details:""
        }
    }

    render(){
        return(
            <React.Fragment>
                <Restdetail resData={this.state.details}/>
            </React.Fragment>
        )
    }

    componentDidMount(){
        var hoteldetails = this.props.match.params.id
        sessionStorage.setItem('hoteldetails',hoteldetails)
        axios.get(`${url}/${hoteldetails}`)
        .then((res) => {this.setState({details:res.data})})
    }
}

export default Restapi;