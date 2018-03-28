# Rearavel
This is a CRUD project maded with Laravel 5 and React.js to practice and learn how to join both as a system 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
What things you need to install the software and how to install them:
- A server side tool like WAMP or XAMPP
- Node and NPM
- Composer and Laravel
- PHP 7

### Installing
1- In the server tool project folder copy the git repository
```
git clone 'repository-address'
```
2- Run the commands to update the composer and npm packages:
```
composer global require 'laravel/installer'
composer update
npm update
``` 
3- Then run the next commnad to generate the autoload file:
```
composer dump-autoload
```
4- Go to your localhost/phpmyadmin and create your database for the project

5- Run the next commnad to create an .env file to initial configuration:
```
cp .env.example .env
```
Open in and configure your database parameters.

6- Run the following code to generate a Laravel project key:
```
php artisan key:generate
```

7- Run the next code to seed or refresh your data table
```
php artisan migrate:refresh --seed
```

8- Now you can run the project executing through your localhost folder or using this commando to run laravel own server
```
php artisan serve
```


### Features
In this project i made a CRUD system using Laravel as backend and React.js as frontend
Laravel handle the following:
- routes
- main view file to React can load its components
- Controller to routes can access to the Views
- Api Controllers to React can consume the data

React handle:
- Components
- CRUD Logic with axios


## License

This project is licensed under the MIT License