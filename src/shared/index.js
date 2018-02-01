'use strict';

import React from 'react';
import {Switch, Route} from 'react-router';

import {Homepage, Test} from 'shared/components';

const App = (props) => {
    console.log(props);

    return(
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/test" component={Test} />
        </Switch>
    );
};

export default App;
