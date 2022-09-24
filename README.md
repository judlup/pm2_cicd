# PM2 CI/CD Process

## Instructions

1. Install PM2 `npm install pm2 -g`
2. Add ssh configurations to Github account
2. Clone the latest version repository (using ssh option `git clone ssh-path`)
3. Run in project's root path `pm2 deploy ecosystem.config.js production setup` - Create the environment pre-deploy
4. Run in project's root path `pm2 deploy ecosystem.config.js production` - Deploy a new version
5. If you want to validate that process is running well, you should run `pm2 ls` and if you need to see the logs registry `pm2 log 0` (0 or pm2's process number)

Notes:

- setup option isn't necessary run in each deployment, is enough running production or the environment name that you have configured.

## References

- [Reference tutorial](https://www.t410.me/article/how-to-ci-cd-for-node-project-pm2)
- [How to generate ssh Github keys](https://www.youtube.com/watch?v=EoLrCX1VVog)