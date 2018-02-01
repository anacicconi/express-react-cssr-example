# express-react-cssr-example
A starter for a project using ExpressJs and ReactJs with client and server side rendering.

After testing React for the server side with the 'express-react-ssr-example', it seemed interesting to use ReactJS in both client and server side. Therefore, this is a starter for a isomorphic application. 

Starting a development environment: 

    npm run start:dev

Starting a production environment: 

    npm run start:prod
    
We use webpack (that uses internally babel as a loader) to transpile the back and the front files. The result will be in the "dist" folder which is then used by nodemon (dev) or pm2 (prod) to launch the server. Changes in the css or js files are automatically loaded. Just refresh the browser and changes will appear.

