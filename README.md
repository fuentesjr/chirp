# README


## Overview
This application allows a user to view a twitter user's latest tweets (default 25). It also includes support for real-time follow/search activity via Websockets and ActionCable


## Tech Stack
This is a Rails 5 application. However, to support a more interactive experience, it is primarily a Singe Page Application using the [vuejs](https://vuejs.org/) front-end framework and [vue-router](https://github.com/vuejs/vue-router). Furthermore, we utilize [Sprockets Commoner](https://github.com/Shopify/sprockets-commoner) to give us support for ES6 syntax and other Babel transformations. To support real-time activity stream features, we utilize Rail's ActionCable together with Redis in production.


## Ruby
* 2.3.1 in development
* 2.3.1 in production (Heroku)

## Node (5+)
We use node and npm to utilize Sprockets Commoner's Javascript build system

## Setup
```
git clone git@github.com:fuentesjr/chirp.git
cd chirp
gem install bundler # If not already installed
bundle install
```


## Deployment (Heroku)
Deploying to Heroku is as simple as pushing to github master branch. We utilize heroku's [automatic-deploys](https://devcenter.heroku.com/articles/github-integration#automatic-deploys)


## Testing (+VCR)
To run tests: 
```
rails test
```
