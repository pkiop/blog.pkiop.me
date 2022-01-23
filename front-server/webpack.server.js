import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  entry: './src/index.js',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('server-build'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
};
