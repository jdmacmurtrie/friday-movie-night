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
