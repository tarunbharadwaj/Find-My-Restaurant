import React,{Component} from 'react';
import axios from 'axios';
import './Listing.css'

const costurl = "https://developerfunnelrestapi.herokuapp.com/restaurantlist"

class CostFilter extends Component{

    Costfilter = (event) => {
        let costvalue = (event.target.value).split(',');
        let lcost = Number(costvalue[0]);
        let hcost = Number(costvalue[1]);
        let meal = sessionStorage.getItem('mealid')
        let corul;
        if(costvalue == ""){
            corul = `${costurl}/${meal}`
        }else{
            corul = `${costurl}/${meal}?hcost=${lcost}&lcost=${hcost}`
        }
        axios.get(corul)
        .then((response) => {this.props.costdata(response.data)})
    }

    render(){
        return(
            <React.Fragment>
                <div className="costFltr">
                    <center>Cost Filter</center>
                    <div onChange={this.Costfilter}>
                        <label>
                            <input type="radio" value="" name="cost"/>All
                        </label><br/>
                        <label>
                            <input type="radio" value="100,200" name="cost"/>100-200
                        </label><br/>
                        <label>
                            <input type="radio" value="201,300" name="cost"/>201-300
                        </label><br/>
                        <label className="">
                            <input type="radio" value="301,400" name="cost"/>301-400
                        </label><br/>
                        <label className="">
                            <input type="radio" value="401,500" name="cost"/>401-500
                        </label><br/>
                        <label className="">
                            <input type="radio" value="501,600" name="cost"/>401-500
                        </label>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CostFilter;