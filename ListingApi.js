import React, { Component } from 'react';
import axios from 'axios';
import Listingdisplay from './ListingDisplay';
import CostFilter from './costFilter';
import CuisineFilter from './cuisineFilter';


const url = "https://developerfunnelrestapi.herokuapp.com/restaurant?mealtype="

class ListingApi extends Component{
    constructor(props){
        super()

            this.state={
            hotelist:''
        }
    }
    
    setDataAsPerFilter(sortedData){
        this.setState({hotelist:sortedData})
    }


    render(){
       
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <CostFilter costdata = {(data) => {this.setDataAsPerFilter(data)}}/> <br/>
                        <CuisineFilter cuisinedata={(data) => {this.setDataAsPerFilter(data)}}/> <br/>
                    </div>
                    <div className="col-md-10">
                        <Listingdisplay displaydata={this.state.hotelist} />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
        var meal = this.props.match.params.id;
        sessionStorage.setItem('mealid',meal)
        axios.get(`${url}${meal}`)
        .then((res) => {this.setState({hotelist:res.data})})
    }
}


export default ListingApi;