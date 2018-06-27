const path = require("path");
const ROOT_PATH = "./src/lib";
const rootDirectory = path.resolve(__dirname, ROOT_PATH);
const componentsDirectory = path.resolve(__dirname, `${ROOT_PATH}/components`);

const webpackConfig = {
    module: {
        rules: [
            {
                test: /\.js$/,
                include: rootDirectory,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/react"],
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};

module.exports = {
    title: "Esthetic UI Kit",
    sections: [
        {
            name: "Quick start",
            content: "./README.md",
        },
        {
            name: "Forms",
            components: `${ROOT_PATH}/components/forms/**/*.jsx`,
        },
    ],
    webpackConfig,
};
