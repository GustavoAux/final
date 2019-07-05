#!/bin/bash

# alias compilar-sass=node_modules/sass/sass.js

node_modules/sass/sass.js --watch base/main.scss final/base.css &
node_modules/sass/sass.js --watch base/main.scss final/base.min.css &