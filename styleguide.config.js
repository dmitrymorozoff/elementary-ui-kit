const path = require("path");
const ROOT_PATH = "./src/lib";
const rootDirectory = path.resolve(__dirname, ROOT_PATH);
const componentsDirectory = path.resolve(__dirname, `${ROOT_PATH}/components`);

const webpackConfig = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
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
            content: "./README.md",
        },
        {
            name: "Forms",
            components: `${ROOT_PATH}/components/forms/**/*.jsx`,
        },
        {
            name: "Others",
            components: `${ROOT_PATH}/components/others/**/*.jsx`,
        },
        {
            name: "Icons",
            components: `${ROOT_PATH}/components/icons/**/*.jsx`,
        },
    ],
    theme: {
        color: {
            baseBackground: "#fff",
            sidebarBackground: "#fff",
            codeBackground: "#F9F9F9",
            link: "#000",
            linkHover: "#FE0C0D",
        },
        fontFamily: {
            base: '"Roboto", sans-serif',
        },
    },
    webpackConfig,
};
