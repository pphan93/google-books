# Read Lounge

React-based Google Books Search app. This assignment requires me to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. II'll also use Node, Express and MongoDB so that users can save books to review or purchase later.

## [Try it yourself!](https://drink-order.herokuapp.com/) 

### Or you can watch the demo video [here.](https://drive.google.com/open?id=1SM3lpGHSAa0Er6MWS2PpJTG1mApWink3)

![image](./client/public/drinkOrder.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. They will also give an overview of some of the app's functionality. 

### Prerequisites

You will need MongoDB installed if you want to run this application locally. For help installing MongoDB, visit
````
https://docs.mongodb.com/manual/installation/
````

Once installed, make sure the MongoDB daemon is running with the following command line command:
````
$ mongod
````

### Installing

Git clone the repository to your local machine: 

HTTPS:
```
$ git clone https://github.com/jckmrrssy/Drink-Order.git
```
SSH:
````
$ git clone git@github.com:jckmrrssy/Drink-Order.git
````

To connect to your local Mongo database, you will need to add an .env file in the root of your cloned repository containing the following code:
````
MONGO_DB="mongodb://localhost/<you decide the name here>"
````

Next, cd into the repository you cloned and install the necessary dependencies by running:
````
$ yarn install
````

You will then be able to start the app locally by runnning:
````
$ yarn start
````

## Built With

* [MongoDB](https://www.mongodb.com/) - NoSQL Database
* [Express.js](https://expressjs.com/) - Node.js framework
* [React.js](https://reactjs.org/) - MVC front-end framework 
* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [Yarn](https://yarnpkg.com/en/) - Dependency management
* [Materialize](https://materializecss.com/) - CSS framework
* [Auth0](https://auth0.com/) - Authentication platform

## Authors

See the list of [contributors](https://github.com/jckmrrssy/Drink-Order/graphs/contributors) who participated in this project along with individual commit history. 

## Planned updates

At the moment, this app is the minimum viable product. We hope to make updates to improve the UI/UX, and add more pricing functionality and features (such as setting a target cost, markup %, etc). We also have plans to build out a mobile version of the application using React Native, to make it even easier for managers to quickly price out their menus. 
