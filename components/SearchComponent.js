

import React from 'react';
 

function SearchComponent({ searchCourse, courseSearchUserFunction }) {

    return (

        <header className="App-header">

            <h1>Aaron' Grand Cart</h1>

            <div className="search-bar">

                <input

                    type="text"

                    placeholder="Search For Products."

                    value={searchCourse}

                    onChange={courseSearchUserFunction}

                />

            </div>

        </header>

    );
}
 

export default SearchComponent