const ROOT_PATH = "./src/lib";

const webpackConfig = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
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
    title: "Elementary UI",
    sections: [
        {
            content: "./README.md",
        },
        {
            name: "Forms",
            components: `${ROOT_PATH}/components/forms/**/*.js`,
        },
        {
            name: "Others",
            components: `${ROOT_PATH}/components/others/**/*.js`,
        },
        {
            name: "Icons",
            components: `${ROOT_PATH}/components/icons/**/*.js`,
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
