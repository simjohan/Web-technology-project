A description of our application can be found under “Overview of the website”. We have chosen to focus on Angular 2.0, and reasoning for this can be found in “The choice between Angular 2.0 and React”. Therefore the Angular 2.0 code is in the master branch of the project. In the master branch the newest, running code is located. The code we delivered in assignment 3.2 is located in the React and Angular branches. The other branches are used while we code different parts of the application, and there might be outdated code in these.


### Getting started: How to pack and run with webpack 
-----------
1. Clone the project > 
git clone -b webpack https://bitbucket.org/trondaal/it2810-10-oppgave-3.git


2. cd it2810-10-oppgave-3

3. Run npm install in the root directory. This will install the necessary dependencies required for webpack


4. Run npm start to build the production pack for the project. This will build the dist/ folder and run the project from there. This will run the server with forever js, which 


5. Access the website through http://localhost:80/ 


6. Because forever.js causes the server to run “forever”, it is required to kill the processes to stop it. This can be done as follows:
Windows: From the task manager by stopping all node processes. 
Linux: From the terminal run “sudo ps -aux | grep node” to find the id of the node processes and then “sudo kill -9 <id>” to kill it.


### Note about running the project: 
For some reason when building the app with webpack, it won’t allow us to have moduleId: module.id, but needs us to have “module.id” (a string instead). The string resulted in a crash when we tried it locally, so the first option wouldn’t work, but the webpack option worked. Because of the extreme performance boost of webpack we chose to stick with that version. 


### Supported browsers:
* Chrome
* Firefox

### Angular 2.0 default project files:
The files “package.json”, “tsconfig.json”, “typings.json” og “systemjs.config.js” describes how the application is supposed to be configured, for example how it should look for files and how the files are supposed to be compiled.


The “index.html” file will be the first file the browser will look for when the application is run. This file will then run the “app.module.ts”-file that is the main module to the application. By giving access to the next classes in the file, the “app.module.ts”-file is the file that will get the rest of the application up and running.




### Naming conventions in Angular 2.0:
The naming conventions in Angular 2.0 makes it easy to find what a file is supposed to be used for, and we have chosen to follow these.


#### .component: 
The files that includes “.component.” is components or files that supports a component, that we would see or use in the finished application. 


### .module:
The files that includes “.module.” is the ones that are responsible for defining which modules we include from the Angular framework and how we use them. 


The file “app-routing.module.ts” lets us describe how to use Routing from the Angular framework, while the file “app.module.ts” includes an overview of the components and other modules the application will need to run as expected.


### Folder structure
To be able to differentiate between the client side and the server side of the application, all client side files are placed in the client folder. The server side files are outside the client folder. 

``` ruby
| client/
|   | app/
|   |   | common/
|   |   | home/
|   |   | movie-review/
|   |   | movie-search/
|   |   | navbar/
|   |   | profile/
| config/
|   | helpers.js
|   | webpack.common.js
|   | webpack.prod.js
|   | webpack.test.js
| dist/ (after build)
|   | app.[hash].css
|   | app.[hash].css.map
|   | app.[hash].js
|   | app.[hash].js.map
|   | index.html
|   | polyfills.[hash].js
|   | polyfills.[hash].js.map
|   | vendor.[hash].js
|   | vendor.[hash].js.map
| node_modules/
| app.js
| database.db
| db.handler.js
| db.init.js
| package.json
| README.md
| routes.js
| systemjs.config.js
| tsconfig.json
| typings.json
| webpack.config.js
```

#### client folder:
Inside the client folder you find an “app” folder, which contains the different components, services and providers that are needed for the application. The different component groups have their own folders. Therefore we have the common file auth.guard.ts inside the common folder, and everything that has to do with the home page in the home folder, movie-reviews in the movie-review folder, movie search in movie-search folder, navigation bar at the top of the page in the navbar folder and profile page in the profile folder. These are the files that are served to the user (client).


#### config folder:
The config folder has 4 config files for webpack. These are files required to pack the project with webpack. One could have made it into one file, but we felt it was cleaner with separate files. The way it is now makes it very easy to build a webpack.dev.js file, which will use the webpack.common.js file and build further on it. The webpack.prod.js file is the main file used for packing the application for production, and it uses the common and the helper file to do so.


#### dist folder:
The dist folder has the distribution files, which are the packed files from webpack. They consist of the app files, index.html, vendor files, and polyfill files. The polyfills file imports core-js functionality required, while the vendor file is for importing other frameworks like bootstrap, jquery and rxjs.
This is also the folder which the app.js file gets the app files to serve (through the new index.html file).


### Database files
The database files are separated into two different files: “db.init.js” and “db.handler.js”. The first file is responsible for initializing the database: create tables with attributes and add some dummy data. The handler file is used to handle different database transactions like adding a user to the database or getting reviews from it. 


### Facebook API
fb.component.ts inside the “\app\navbar” folder is a component that handles call to the Facebook API. The button has a (click)-functionality that calls login and logout, and gets userdata from the API. At the moment we get name, email and image url. 


### Choosing SQLite:
SQLite is a fast open source database. SQLite was chosen because it offers very easy setup and connection and since it’s an internal database it should perform faster than other alternatives. Almost all major frameworks/languages have native support for this database, and we felt that it would be too tedious to use time figuring out how to configure i.e MySQL or Oracle. Since our application will not scale to support millions of requests a full blown RDBMS is not necessary. Our group also had previous experience using SQLite which was a plus. 


### Choosing Webpack
The “packing tool” most talked about was webpack, and it also had most documentation, which is why we chose it to pack our angular files. We needed webpack to pack the files, or we would’ve had 30 seconds to 2 minutes to serve the web page to the user. And these loading times would then happen again if we were to refresh the web page. With webpack we got it down to “normal” times of mere seconds to serve the web page initially.


### The choice between Angular 2.0 and React
To be able to choose between Angular 2.0 and React, we first listed all the positive and negative information we had about each technology.