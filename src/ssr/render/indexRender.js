const dotenv = require('dotenv');
const getManifest = require('../getManifest');

dotenv.config();
let files = {};

if (process.env.NODE_ENV === 'production') {
  files = getManifest();
} else {
  files = {
    'main.css': 'assets/main.css',
    'main.js': 'assets/app.js',
    'vendors.js': 'assets/vendors.js',
  };
}

const render = (html, css, preloadedState) => {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" type="image/png" sizes="16x16" href="https://upload.wikimedia.org/wikipedia/commons/3/3e/Tree-256x256.png" />
        <link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/commons/3/3e/Tree-256x256.png" type="image/png/ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="${files['main.css']}" type="text/css" />
        <style id="jss-server-side">${css}</style>
        <title>POSTIC</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="${files['main.js']}" type="text/javascript"></script>
        <script src="${files['vendors.js']}" type="text/javascript"></script>
      </body>
    </html>
  `;
};

module.exports = render;
