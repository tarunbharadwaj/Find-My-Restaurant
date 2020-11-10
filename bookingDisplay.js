import React from 'react';

const ViewBooking = (props) => {

    const renderTable = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr>
                        <td>{item._id}</td>
                        <td>{item.rest_id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>{item.person}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h1>Order Details</h1></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Restaurant Name</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>No. Person</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}


export default ViewBooking;