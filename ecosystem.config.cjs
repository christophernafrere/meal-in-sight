module.exports = {
    apps: [
        {
            name: "web",
            cwd: "./apps/web",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 3001",
            env: {
                NODE_ENV: "production",
                PORT: "3000",
            },
        },
        {
            name: "api",
            cwd: "./apps/api",
            script: "node",
            args: "dist/main.js",
            env: {
                NODE_ENV: "production",
                PORT: "4000",
            },
        },
    ],
};
