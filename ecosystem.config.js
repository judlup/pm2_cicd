module.exports = {
    apps: [
        {
            name: "pm2-deploy",
            script: "index.js"
        }
    ],
    deploy: {
        production: {
            user: "judlup",
            host: "localhost",
            path: "/app",
            repo: "git@github.com:judlup/pm2_cicd.git",
            ref: "origin/main",
            key: "/home/judlup/.ssh/id_rsa.pub",
            "post-deploy":"npm i; pm2 reload ecosystem.config.js --env production"
        }
    }
}