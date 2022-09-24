const DB = process.env.DB
module.exports = {
    apps: [
        {
            name: "pm2-deploy",
            append_env_to_name: true,
            script: "index.js",
            env_dev: {
                "PORT": 5000,
                "NODE_ENV":"dev",
                "DB":DB
            },
            env_prod: {
                "PORT": 6000,
                "NODE_ENV":"prod",
                "DB":DB
            }
        }
    ],
    deploy: {
        dev: {
            user: "judlup",
            host: "localhost",
            path: "/app/dev",
            repo: "git@github.com:judlup/pm2_cicd.git",
            ref: "origin/main",
            key: "/home/judlup/.ssh/id_rsa.pub",
            "post-deploy":"npm i; pm2 reload ecosystem.config.js --env dev"
        },
        prod: {
            user: "judlup",
            host: "localhost",
            path: "/app/prod",
            repo: "git@github.com:judlup/pm2_cicd.git",
            ref: "origin/main",
            key: "/home/judlup/.ssh/id_rsa.pub",
            "post-deploy":"npm i; pm2 reload ecosystem.config.js --env prod"
        }
    }
}
