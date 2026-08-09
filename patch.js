const fs = require('fs');
let file = fs.readFileSync('next.config.ts', 'utf8');
file = file.replace(
  'webpack: (config, {dev}) => {',
  'webpack: (config, {dev, webpack}) => {\n    config.plugins.push(new webpack.NormalModuleReplacementPlugin(/next[\\\\\\/]dist[\\\\\\/]build[\\\\\\/]polyfills[\\\\\\/]polyfill-nomodule\\.js/, require("path").resolve(__dirname, "lib/empty.js")));'
);
fs.writeFileSync('next.config.ts', file);
