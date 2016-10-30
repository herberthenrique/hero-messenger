 module.exports = {
   entry: './src/js/app.js',
   output: {
     path: './build/js',
     filename: 'app.js',
   },
   module: {
     loaders: [{
       test: /\.js$/,
       exclude: /(node_modules|bower_components)/,
       loader: 'babel',
       query: {
         presets: ['es2015'],
       },
     }],
   },
   node: {
     fs: 'empty',
   },
 };
