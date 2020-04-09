module.exports = {
  plugins: [
    [
      "module-resolvers",
      {
        alias: {
          "#root": "./src"
        }
      }
    ]
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ]
}