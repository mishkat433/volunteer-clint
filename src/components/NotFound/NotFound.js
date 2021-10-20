import React from 'react';
import Navbar from '../Navbar/Navbar';

const NotFound = (props) => {
    return (
        <div className="container">
            <Navbar></Navbar>
            
            <h1>Page not found</h1>
            <h5>{props.not}</h5>
        </div>
    );
};

export default NotFound;