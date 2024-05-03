"use strict";

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  config.plugins.push(
    new webpack.default.DefinePlugin({
      STATIC_FILES_HOST: JSON.stringify(process.env.STATIC_FILES_HOST),
    })
  );

  return config;
};
