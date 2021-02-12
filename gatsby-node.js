// enable react without import
exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPlugin({
        name: "@babel/plugin-transform-react-jsx",
        options: {
            runtime: "automatic"
        }
    })
}
