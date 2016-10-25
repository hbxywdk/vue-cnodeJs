module.exports = {
  entry: './main.js',
/*  entry: {
      index: './main.js',
      vendor: ['vue', 'vuex']
  },*/
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}