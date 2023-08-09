/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/AvianDS",
  images: {
    loader: "custom",
    loaderFile: "./my-loader.js",
  },
};

module.exports = nextConfig;
