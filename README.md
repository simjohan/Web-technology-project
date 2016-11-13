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

# client/
This is where