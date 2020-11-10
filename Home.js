import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

const lurl = "https://developerfunnelrestapi.herokuapp.com/restaurant"
const curl = "https://developerfunnelrestapi.herokuapp.com/restaurant?city="


///class component
class Home extends Component{
    constructor(){
        super()

        this.state ={
            location:'',
            restaurant:''
        }
    }

    //display of data from api for city names
    Cityrender = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                       {item.city_name}
                    </option>
                )
            })
        }
    }

    //display of data from api for restaurant names
    Restaurantrender = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.name} 
                    </option>
                )
            })
        }
    }

    ResHandle = (event) => {
        console.log(this.props)
        this.props.history.push(`/restaurantdetails/${event.target.value}`)

    }

    // fetching data from api url
    Handle = (event) => {
        const cityid = event.target.value
        const rurl = `${curl}${cityid}`
        fetch(rurl,{Method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({restaurant:data})})
    } 


    render(){
        console.log(this.state.location);
        return(
            <React.Fragment>
                <div class="picplace">
                        <div id="texthead">Find Restaurants in your locations</div>
                            <div id="selector">
                                <select id="options" onChange={this.Handle}>
                                    <option>--------------SELECT CITY-----------------------</option>
                                    {this.Cityrender(this.state.location)}
                                </select>
                                <select id="options" onChange={this.ResHandle}>
                                    <option>--------------SELECT RESTAURANT-----------------------</option>
                                    {this.Restaurantrender(this.state.restaurant)}
                                </select>
                                {/* <input id="inputbox" type="datalist" onChange={this.Handle}placeholder="---------------------Search Restaurants----------------------"/>
                                {this.Restaurantrender(this.state.restaurant)} */}
                            </div>
                </div>
            </React.Fragment>
        )
    }

    //when we want to get city api data when on page load
    componentDidMount(){
       fetch(lurl,{Method:'GET'})
       .then((res) => res.json())
       .then((data) => {this.setState({location:data})})
    }
}

export default withRouter(Home);