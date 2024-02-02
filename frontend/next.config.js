/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'app/assets/styles')],
        prependData: `@import "/src/app/assets/styles/global/_theme-variables.scss";`
    },
    images: {
        domains: ['assets-global.website-files.com', "res.cloudinary.com"]
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    }
}

module.exports = nextConfig
