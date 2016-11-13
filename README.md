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


### Folder structure
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