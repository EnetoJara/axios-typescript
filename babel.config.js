module.exports = (api) => {
    api.cache(() => process.env.NODE_ENV);
    if (process.env.BABEL_ENV==="commonjs") {
        return {
            presets: [
                ["@babel/preset-env", {
                    targets: {
                        node: "current",
                        esmodules: false
                    },
                    useBuiltIns: "entry",
                    corejs: 3,
                    modules: "commonjs"
                }],
                "@babel/preset-typescript"
            ],
            plugins: [
                "@babel/plugin-transform-runtime",
                ["@babel/plugin-transform-object-super"],
                "@babel/plugin-transform-classes",
            ]
        }
    }

    return {
        presets: [
            ["@babel/preset-env", {
                targets: {
                    node: "current",
                    esmodules: true
                },
                useBuiltIns: "entry",
                corejs: 3,
                modules: false
            }],
            "@babel/preset-typescript"
        ]
    }
}
