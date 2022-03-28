module.exports = {
    "presets": [
        [
        "@babel/preset-env",
        {
            corejs: { version: 3 },
            useBuiltIns: "usage",
            targets: {
                edge: "17",
                chrome: "67",
                firefox: "60",
                safari: "11.1",
                ie:  "11"
            }
        }]
    ],
    "plugins": ["@babel/plugin-transform-runtime", "@babel/plugin-transform-arrow-functions", "@babel/plugin-transform-spread"]
}