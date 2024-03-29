const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    chunkFilename: 'scripts/[name].[fullhash:8].bundle.js',
    filename: 'scripts/[name].[fullhash:8].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@styles': path.join(__dirname, 'src', 'styles'),
      '@components': path.join(__dirname, 'src', 'components'),
      '@containers': path.join(__dirname, 'src', 'containers'),
      '@hooks': path.join(__dirname, 'src', 'hooks'),
      '@pages': path.join(__dirname, 'src', 'pages'),
      '@routes': path.join(__dirname, 'src', 'routes'),
      '@assets': path.join(__dirname, 'src', 'assets'),
      '@utils': path.join(__dirname, 'src', 'utils'),
      '@actions': path.join(__dirname, 'src', 'redux/actions'),
      '@reducers': path.join(__dirname, 'src', 'redux/reducers'),
      '@schemas': path.join(__dirname, 'src', 'schemas'),
      '@api': path.join(__dirname, 'src', 'api'),
      '@icons': path.join(__dirname, 'src', 'assets', 'icons'),
      '@context': path.join(__dirname, 'src', 'Context.js'),
      '@storage': path.join(__dirname, 'src', 'storage.js'),
      '@fragments': path.join(__dirname, 'src', 'fragments'),
      '@constants': path.join(__dirname, 'src', 'constants.js'),
    },
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: false,
    allowedHosts: ['localhost', 'wsl'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/',
          publicPath: '../assets/',
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: path.join(__dirname, 'public', 'favicon.svg'),
    }),
    new Dotenv({
      systemvars: true,
    }),
    new WebpackPwaManifestPlugin({
      name: "Hriiapa' | Administra tus notas de manera segura | Administra tus notas de manera segura",
      short_name: "Hriiapa'",
      description:
        "Hriaapa' es un sistema preocupado por tu seguridad que te ayuda a crear y administrar notas de manera segura.",
      background_color: '#ffffff',
      theme_color: '#5789ff',
      start_url: '/',
      icons: [
        {
          src: path.resolve('public/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('icons'),
          ios: true,
          purpose: 'any maskable',
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://easy-notes-api.herokuapp.com'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
