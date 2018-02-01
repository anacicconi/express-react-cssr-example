import React from 'react';

export default ({title, body, css, appJs, vendorJs}) => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>${title}</title>
            <link rel="stylesheet" href="/public/${css}">
        </head>
        <body>
            <div id="root">${body}</div>
            <script src="/public/${vendorJs}"></script>
            <script src="/public/${appJs}"></script>
      </body>
    </html>
  `;
};
