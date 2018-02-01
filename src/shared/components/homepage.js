'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

import css from 'client/css/test.css';

class Homepage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <Link to="/test">Go to the test page</Link>
            </div>
        );
    }
}

export default Homepage;
