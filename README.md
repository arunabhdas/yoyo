yoyo
====

yoyo is a multi-purpose scaffolding system built using yeoman

Requirements
------------

- This uses the 4.2.3 version of Node.js which is the latest stable version
nvm use v4.2.3
Now using node v4.2.3 (npm v2.14.7)


- Ensure that you have the latest version of npm or upgrade using
npm install -g npm

- Also install generator-generator as follows
npm install -g yo generator-generator

- underscore.string
npm install underscore.string --save-dev

- classify

Steps 
-----

 - Run 
 yo generator

Because generator-yoyo was specified as the package name in package.json, npm link will create a symbolic link in a more widely-accessible location (e.g., /usr/local/lib/node_modules/generator-yoyo). This enables you to access your local ~/dev/generator-yoyo generator globally, making development, and life in general, much easier.

- cd generator-yoyo && npm link




Usage
-------


- cd yoyo-testbed && yo yoyo
