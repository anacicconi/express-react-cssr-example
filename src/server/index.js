'use strict';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';

// main app component
import App from 'shared';

// global template
import template from 'shared/views/template';

// make a require here because this file is generated by a webpack plugin
let assets = require('./webpack-assets.json');

const app = express();

// set static folder for generated css and front js files
app.use('/public', express.static('./dist/client'));

/**
 * Global route - it has to be the last one or the others won't work
 */
app.get('*', (req, res) => {

    const context = {};

    const appWithRouter = (
        <StaticRouter location={req.url} context={context}>
            <App side="server"/>
        </StaticRouter>
    );

    if (context.url) {
        res.redirect(context.url);
        return;
    }

    let body = ReactDOMServer.renderToString(appWithRouter);

    res.status(200).send(template({
        title: 'A server and client side rendering app',
        css: assets.client.css,
        body: body,
        appJs: assets.client.js,
        vendorJs: assets.vendor.js
    }));
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
