'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

class Test extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>This is a test page</h1>
                <Link to="/">Go back to the Homepage</Link>
            </div>
        );
    }
}

export default Test;
