const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);
const app = express();
const port = 3000;

const devMiddleware = webpackDevMiddleware(compiler);
app.use(devMiddleware);

const hotMiddleware = webpackHotMiddleware(compiler);
app.use(hotMiddleware);

const staticPath = path.join(__dirname, 'build');
app.use(express.static(staticPath));

app.listen(port, () => console.log(`Dev server running on port ${port}!`));