module.exports = {
  module: {
    loaders: [
      { test: /\.css/,      loader: "style-loader!css-loader" },
      { test: /\.html/,     loader: "raw-loader" },
      { test: /\.gif/,      loader: "url-loader?limit=10000&minetype=image/gif" },
      { test: /\.jpg/,      loader: "url-loader?limit=10000&minetype=image/jpg" },
      { test: /\.png/,      loader: "url-loader?limit=10000&minetype=image/png" },
      { test: /\.woff$/,    loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/,     loader: "file-loader" },
      { test: /\.eot$/,     loader: "file-loader" },
      { test: /\.svg$/,     loader: "url-loader?limit=10000&minetype=image/svg+xml" },
      { test: /\.js$/,      loader: "jsx-loader" },
      { test: /\.json$/,    loader: "json-loader" }
    ],
    noParse: /parse-latest.js/
  }
};
