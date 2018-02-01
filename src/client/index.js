'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'shared';

class Main extends React.Component {
    render() {

        return (
            <BrowserRouter>
                <App {...this.props} side="client"/>
            </BrowserRouter>
        );
    }
}

ReactDOM.hydrate(
    <Main />,
    document.getElementById('root')
);
