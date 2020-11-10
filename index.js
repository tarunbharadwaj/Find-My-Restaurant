import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routing from './Component/Router';

//// we target by the 'div' name in the file index.html
ReactDOM.render(
    <Routing/>,
    document.getElementById('root')
);  
