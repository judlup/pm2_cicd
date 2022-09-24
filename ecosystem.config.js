module.exports = {
    apps: [
        {
            name: "pm2-deploy",
            script: "index.js",
            env: {
                "PORT": 5000,
                "NODE_ENV":"dev"
            },
            env_prod: {
                "PORT": 6000,
                "NODE_ENV":"prod"
            }
        }
    ],
    deploy: {
        dev: {
            user: "judlup",
            host: "localhost",
            path: "/app",
            repo: "git@github.com:judlup/pm2_cicd.git",
            ref: "origin/main",
            key: "/home/judlup/.ssh/id_rsa.pub",
            "post-deploy":"npm i; pm2 reload ecosystem.config.js --env dev"
        },
        prod: {
            user: "judlup",
            host: "localhost",
            path: "/app",
            repo: "git@github.com:judlup/pm2_cicd.git",
            ref: "origin/main",
            key: "/home/judlup/.ssh/id_rsa.pub",
            "post-deploy":"npm i; pm2 reload ecosystem.config.js --env prod"
        }
    }
}