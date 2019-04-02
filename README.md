<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
![Build Status](https://codeship.com/projects/ae969e10-3c08-0135-76f0-46ceed86863a/status?branch=master)
![Code Climate](https://codeclimate.com/github/jdmacmurtrie/friday-movie-night.png)
![Coverage Status](https://coveralls.io/repos/jdmacmurtrie/friday-movie-night/badge.png)

# Friday Movie Night

Friday Movie Night is the final product of an intense 18 weeks at Launch Academy, a web development boot camp. It combines all of the languages, techniques, tools, and principles learned over the course of the program.  Friday Movie Night was inspired by a family tradition of having pizza while watching a movie nearly every Friday night as I grew up.

## Getting Started

This project is a Ruby on Rails application with a React.js front end.

### Prerequisites

In order to run this application locally, you must at least have Ruby 2.3.3, Rails 5.1.0, node 4.0.0, and npm 5.6.0 installed.

```no-highlight
$ ruby -v
=> ruby 2.3.3
$ rails -v
=> Rails 5.0.6
$ node -v
=> v9.4.0
$ npm -v
=> 5.6.0
```

### Installing

To install all your gem and npm dependencies, run the following commands:

```sh
$ bundle
$ npm install
```

### Setting up

In order to get the application running in a development server, you will need to configure the database on your local machine.

Create your database from the `config/database.yml` file:

```sh
$ rake db:create
```

Run the migrations located in the `db/migrate` folder to setup your schema with the following command:

```sh
$ rake db:migrate
```

You should be able to open up your Rails console and have access to your Rails models.

### Running the development server

In order to run the Rails app in a development server, run the following command in your terminal:

```sh
$ rails s
```

Then, in a separate terminal window, run the following command to start the webpack server:

```sh
$ npm start
```

## Running the tests

Capybara and RSpec are used to test the Rails application, while Jasmine and Enzyme are used to test the React front end.

To run the Rails spec tests, use the following commands:

```sh
$ rake db:test:prepare
$ rake
```

To execute the enzyme tests, run the following command in a separate terminal window:

```sh
$ npm test
```

## Deployment

This application is deployed using Heroku using these instructions: https://devcenter.heroku.com/articles/git

## Contributing

Feel free to contact us if you feel like contributing!


## License

This project is licensed under the MIT License - see the This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/jdmacmurtrie/friday-movie-night/blob/master/LICENSE.md) file for details
 file for details

## Acknowledgments

* Thanks to my family, for keeping our tradition alive for as long as we have.  And for forever arguing about it.
>>>>>>> origin/master
