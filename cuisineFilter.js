import React,{Component} from 'react';
import axios from 'axios';

const cuisineurl = "https://developerfunnelrestapi.herokuapp.com/restaurantlist"


class CuisineFilter extends Component{


    CuisineFilter = (event) => {
        let cuisineType = event.target.value;
        let meal = sessionStorage.getItem('mealid')
        let crul;
        if(cuisineType == ""){
            crul = `${cuisineurl}/${meal}`
        }else{
            crul = `${cuisineurl}/${meal}?cuisine=${cuisineType}`
        }
        axios.get(crul)
        .then((response) => {this.props.cuisinedata(response.data)})
    }


    render(){
        return(
            <React.Fragment>
                <div className="costFltr">
                    <center>Cuisine Filter</center>
                    <div onChange={this.CuisineFilter}>
                        <label>
                            <input type="radio" value="" name="Cuisine"/>All
                        </label><br/>
                        <label>
                            <input type="radio" value="1" name="Cuisine"/>North Indian
                        </label><br/>
                        <label>
                            <input type="radio" value="2" name="Cuisine"/>South Indian
                        </label><br/>
                        <label className="">
                            <input type="radio" value="3" name="Cuisine"/>Chinese
                        </label><br/>
                        <label className="">
                            <input type="radio" value="4" name="Cuisine"/>Fast Food
                        </label>
                        <label className="">
                            <input type="radio" value="5" name="Cuisine"/>Street Food
                        </label>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CuisineFilter;