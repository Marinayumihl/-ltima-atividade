const NextFederationPlugin =
  require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "micro_pedido",

        filename: "static/chunks/remoteEntry.js",

        exposes: {
          "./Pedido": "./components/Pedido.js",
        },

        shared: {},

        extraOptions: {
          exposePages: false,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;