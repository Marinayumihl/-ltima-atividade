import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: "micro_cardapio",

        filename: "static/chunks/remoteEntry.js",

        exposes: {
          "./Cardapio": "./components/Cardapio.js",
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

export default nextConfig;