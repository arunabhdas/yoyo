yoyo
====

yoyo is a multi-purpose scaffolding system built using yeoman

Requirements
------------

* This uses the 4.2.3 version of Node.js which is the latest stable version
nvm use v4.2.3
Now using node v4.2.3 (npm v2.14.7)


* Ensure that you have the latest version of npm or upgrade using
npm install -g npm

* Also install generator-generator as follows
npm install -g yo generator-generator


Meta 
------------------------

* Run 
 yo generator

Because generator-yoyo was specified as the package name in package.json, npm link will create a symbolic link in a more widely-accessible location (e.g., /usr/local/lib/node_modules/generator-yoyo). This enables you to access your local ~/dev/generator-yoyo generator globally, making development, and life in general, much easier.

* cd generator-yoyo && npm link




Usage
-------


* cd testflight-yoyo && yo yoyo

* This should create all the files in testflight-yoyo

* Open a new terminal window and start mongodb as follows
./mongod --dbpath=<absolute-path-to>/mongodb/data/db

* cd testflight-yoyo && npm start

* Open browser and point it to localhost:8080


Testflight
-----------

==> yo yoyo
? Your project name froyo
froyo
   create bower.json
   create package.json
identical .bowerrc
   create server.js
   create routes/all.js
   create model/todo.js
   create views/index.ejs
   create public/css/app.css
   create public/js/app.js


I'm all done. Running npm install & bower install for you to install the required dependencies. If this fails, try running the command yourself.


froyo@ <path-to>/testflight-yoyo

├─┬ body-parser@1.14.2 
│ ├── bytes@2.2.0 
│ ├── content-type@1.0.1 
│ ├── debug@2.2.0 
│ ├── depd@1.1.0 
│ ├─┬ http-errors@1.3.1 
│ │ ├── inherits@2.0.1 
│ │ └── statuses@1.2.1 
│ ├── iconv-lite@0.4.13 
│ ├─┬ on-finished@2.3.0 
│ │ └── ee-first@1.1.1 
│ ├── qs@5.2.0 
│ ├─┬ raw-body@2.1.5 
│ │ └── unpipe@1.0.0 
│ └─┬ type-is@1.6.10 
│   ├── media-typer@0.3.0 
│   └─┬ mime-types@2.1.8 
│     └── mime-db@1.20.0 
├─┬ cookie-parser@1.0.1 
│ ├── cookie@0.1.0 
│ └── cookie-signature@1.0.3 
├── ejs@2.3.4 
├─┬ express@4.13.3 
│ ├─┬ accepts@1.2.13 
│ │ └── negotiator@0.5.3 
│ ├── array-flatten@1.1.1 
│ ├── content-disposition@0.5.0 
│ ├── cookie@0.1.3 
│ ├── cookie-signature@1.0.6 
│ ├── depd@1.0.1 
│ ├── escape-html@1.0.2 
│ ├── etag@1.7.0 
│ ├── finalhandler@0.4.0 
│ ├── fresh@0.3.0 
│ ├── merge-descriptors@1.0.0 
│ ├── methods@1.1.1 
│ ├── parseurl@1.3.0 
│ ├── path-to-regexp@0.1.7 
│ ├─┬ proxy-addr@1.0.10 
│ │ ├── forwarded@0.1.0 
│ │ └── ipaddr.js@1.0.5 
│ ├── qs@4.0.0 
│ ├── range-parser@1.0.3 
│ ├─┬ send@0.13.0 
│ │ ├── depd@1.0.1 
│ │ ├── destroy@1.0.3 
│ │ └── mime@1.3.4 
│ ├── serve-static@1.10.0 
│ ├── utils-merge@1.0.0 
│ └── vary@1.0.1 
└─┬ mongoose@4.3.3 
  ├── async@0.9.0 
  ├── bson@0.4.19 
  ├── hooks-fixed@1.1.0 
  ├── kareem@1.0.1 
  ├─┬ mongodb@2.1.0 
  │ ├── es6-promise@3.0.2 
  │ ├── UNMET PEER DEPENDENCY kerberos@~0.0
  │ ├─┬ mongodb-core@1.2.26 
  │ │ └── bson@0.4.20 
  │ └─┬ readable-stream@1.0.31 
  │   ├── core-util-is@1.0.2 
  │   ├── isarray@0.0.1 
  │   └── string_decoder@0.10.31 
  ├── mpath@0.1.1 
  ├── mpromise@0.5.4 
  ├─┬ mquery@1.6.3 
  │ └── bluebird@2.9.26 
  ├── ms@0.7.1 
  ├── muri@1.0.0 
  ├── regexp-clone@0.0.1 
  └── sliced@0.0.5 

npm WARN mongodb-core@1.2.26 requires a peer of kerberos@~0.0 but none was installed.
npm WARN froyo@ No description
npm WARN froyo@ No repository field.
npm WARN froyo@ No license field.



* Start mongod here


*  npm install -g bower

* bower install

==> npm start

> froyo@ start <path-to>/testflight-yoyo
> node server.js

body-parser deprecated undefined extended: provide extended option server.js:21:20
[Function]
App listening at port 8080
