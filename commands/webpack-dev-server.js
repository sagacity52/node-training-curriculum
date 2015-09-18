function startDevServer() {
  const webpackPort = process.env.WEBPACK_PORT;

  let webpack = require('webpack');
  let WebpackDevServer = require('webpack-dev-server');

  let webpackConfig = require('../webpack.config.js');

  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  webpackConfig.plugins.push(new webpack.NoErrorsPlugin());

  webpackConfig.entry.push(`webpack-dev-server/client?http://0.0.0.0:${webpackPort}`);
  webpackConfig.entry.push('webpack/hot/only-dev-server');

  webpackConfig.output.devtool = 'eval';

  let compiler = webpack(webpackConfig);

  let devServer = new WebpackDevServer(compiler, {
    contentBase : `http://127.0.0.1:${webpackPort}/`,
    hot : true,
    noInfo : false,
    quiet : false,
    stats : { colors : true },
    historyApiFallback : true,
  });

  devServer.listen(process.env.WEBPACK_PORT, function() {
    console.log(`webpack-dev-server started on port ${webpackPort}`);
  });
}

export default function(program) {
  return program
    .command('webpack')
    .description('start webpack-dev-server')
    .action(startDevServer);
}
