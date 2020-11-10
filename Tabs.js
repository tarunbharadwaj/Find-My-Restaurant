import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Component = () => {
    return(
        <Tabs>
            <TabList>
                <Tab>Restaurant OverView</Tab>
                <Tab>Restaurant Details</Tab>
                <Tab>Contact Us</Tab>
            </TabList>

            <TabPanel>
            <p>
                This page is about finding your best suitable Restaurant in Your area.
            </p>
            <p>
                <a href="http://localhost:3000/details" target="_blank"> Details </a>
            </p>
            </TabPanel>

            <TabPanel>
            <p>
                This Section is about the pricing of the various restaurants
            </p>
            <p>
                <a href="http://localhost:3000/list" target="_blank"> List </a>
            </p>
            </TabPanel>

            <TabPanel>
            <p>
                This is the contact us page<br/>Thank You for your time 
            </p>
            <p>
                <a href="http://localhost:3000" target="_blank"> Home </a>
            </p>
            </TabPanel>
        </Tabs>
    )
}

export default Component;