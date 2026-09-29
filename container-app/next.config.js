const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "container",

filename: "static/chunks/remoteEntry.js",

        remotes: {
          micro_cardapio:
            "micro_cardapio@http://localhost:3001/_next/static/chunks/remoteEntry.js",

          micro_pedido:
            "micro_pedido@http://localhost:3002/_next/static/chunks/remoteEntry.js",
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