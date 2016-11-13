### Getting started
-----------
1. Clone the repository

2. To get a complete installation of all necessary node modules, run:

    `npm install`


3. Run the application by entering your project folder and run:

    `npm start`

This will pack the project with Webpack and run it afterwards!

The application can be viewed at localhost:80.


### Folder structure
├── client/
│   ├── app/
│   │   ├── common/
│   │   ├── home/
│   │   ├── movie-review/
│   │   ├── movie-search/
│   │   ├── navbar/
│   │   └── profile/
├── config/
│   ├── helpers.js
│   ├── webpack.common.js
│   ├── webpack.prod.js
│   ├── webpack.test.js
├── dist/ (after build)
│   ├── app.[hash].css
│   ├── app.[hash].css.map
│   ├── app.[hash].js
│   ├── app.[hash].js.map
│   ├── index.html
│   ├── polyfills.[hash].js
│   ├── polyfills.[hash].js.map
│   ├── vendor.[hash].js
│   └── vendor.[hash].js.map
├── node_modules/
├── app.js
├── database.db
├── dbHandler.js
├── dbInit.js
├── package.json
├── README.md
├── routes.js
├── systemjs.config.js
├── tsconfig.json
├── typings.json
├── webpack.config.js


[me@home]$ tree Python-2.7.3 --charset ascii | head -n 11  # ASCII only
Python-2.7.3
|-- configure
|-- configure.in
|-- Demo
|   |-- cgi
|   |   |-- cgi0.sh
|   |   |-- cgi1.py
|   |   |-- cgi2.py
|   |   |-- cgi3.py
|   |   |-- README
|   |   `-- wiki.py

# client/
This is where