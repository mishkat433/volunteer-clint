import React from 'react';
import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div>
            <h2 className="text-uppercase heading text-center">i grow by helping people in need</h2>
            <div className="input-group bar">

                <input type="text" className="form-control" placeholder="Search..." aria-label="Input group example" aria-describedby="btnGroupAddon" />
                <div className="input-group-prepend">
                    <button className="input-group-text bg-primary text-white" id="btnGroupAddon">Search</button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;