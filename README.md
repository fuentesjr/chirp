# README


## Overview
This application allows a user to view a twitter user's latest tweets (default 15)


## Tech Stack
This is a Rails 5 application. However, to support a more interactive experience, it is primarily a Singe Page Application using [vuejs](https://vuejs.org/) and [vue-router](https://github.com/vuejs/vue-router).


## Ruby (2.2+)
2.3.1 in development
2.2.4 in production (Heroku)


## Deployment (Heroku)
Deploying to Heroku is as simple as pushing to github master branch. We utilize heroku's [automatic-deploys](https://devcenter.heroku.com/articles/github-integration#automatic-deploys)


## Testing (+VCR)
To run tests: rails test
