import React,{ Component } from 'react';
import QuickDisplay from './QuickDisplay';

const mealurl = "https://developerfunnelrestapi.herokuapp.com/mealtype"

class QuickSearch extends Component{
    constructor(){
        super()

        this.state = {
            mealtype:''
        }
    }

    render(){
        return(
            <QuickDisplay quickdata={this.state.mealtype}/>
        )
    }

    componentDidMount(){
        fetch(mealurl, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({mealtype:data})})
    }
}



export default QuickSearch;




