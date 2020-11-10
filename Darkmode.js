import React,{useState,useEffect} from 'react';
import './Darkmode.css';

function DarkMode() {

    const [dark,setMode] = useState(false)

    return(
        <div className={dark? "darknav darkmode":"darknav"}>
            <div className="navRX">
                <h3>{dark?"Dark Mode":"Light Mode"}</h3>
                <label className="switch">
                    <input onChange={() => setMode(!dark)} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>

    );
} 

export default DarkMode;