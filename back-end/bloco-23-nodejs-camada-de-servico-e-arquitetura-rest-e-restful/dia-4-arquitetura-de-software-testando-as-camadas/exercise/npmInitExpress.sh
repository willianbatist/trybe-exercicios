#!/bin/zsh
npm init -y
npm install express body-parser mysql2
npm install -D nodemon
npm install -D mocha chai sinon
mkdir services
mkdir controllers
mkdir models
mkdir tests
touch index.js