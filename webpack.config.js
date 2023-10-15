const path = require('path');

module.exports = {
    entry: './content.js', // Your entry point file
    output: {
        filename: 'bundle.js', // The bundled output file
        path: path.resolve(__dirname, 'dist') // Output directory
    }
};
