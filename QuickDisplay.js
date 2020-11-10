import React from 'react';
import './Detailpage.css';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const renderList = ({quickdata}) => {
        if(quickdata){
            return quickdata.map((item) => {
                return(
                    <Link to={`/list/${item.mealtype}`}>
                        <div className="tilecontainer">
                            <div className="tileComponent1">
                                <img src={`./images/${item.name}.jpg`} className="imageclass"/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Exclusive {item.name} option for your need
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }


    return(
        <React.Fragment>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    Quick Searches
                </p>
                <p className="quickSearchSubHeading">
                    Discover Restaurants by meal type
                </p>
                {renderList(props)}
            </div>
        </React.Fragment>
    )
}
   
export default QuickDisplay;