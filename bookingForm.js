import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const burl = "https://developerfunnelrestapi.herokuapp.com/restaurantdetails"
const placeorder = "https://developerfunnelrestapi.herokuapp.com/placeorder"


class BookingForm extends Component{
    constructor(props){
        super()

        this.state = {
            order_id: Math.floor(Math.random()*10000),
            rest_name: '',
            name:'',
            phone:'',
            person:''
        }
    }

    handleChangeName = (event) => {
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }

    handleChangePhone = (event) => {
        this.setState({phone:event.target.value})
    }

    handleChangePerson = (event) => {
        this.setState({person:event.target.value})
    }

    handleSubmit = () => {
        fetch(placeorder, {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((this.props.history.push('/orders')))
    }

    async componentDidMount(){
        let restid = this.props.match.params.id;
        axios.get(`${burl}/${restid}`)
        .then((res) => {this.setState({rest_name:res.data[0].name})})
    }


    render(){
        return(
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>Place Your Order</h3>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Order ID</label> <br/>
                            <input type="text" name="order_id" value={this.state.order_id} readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Restaurant Name</label> <br/>
                            <input type="text" name="rest_name" value={this.state.rest_name} readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Name</label> <br/>
                            <input type="text" name="name" value={this.state.name} className="form-control" onChange={this.handleChangeName}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label> <br/>
                            <input type="text" name="phone" value={this.state.phone} className="form-control" onChange={this.handleChangePhone}/>
                        </div>
                        <div className="form-group">
                            <label>Number Of Persons</label> <br/>
                            <select type="text" name="person" value={this.state.person} className="form-control" onChange={this.handleChangePerson}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                            </select>
                        </div>
                        <Link type="button" class="btn btn-success btn-md" onClick={this.handleSubmit}>Submit</Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default BookingForm;