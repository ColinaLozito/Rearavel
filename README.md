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

## Screans

![1](https://user-images.githubusercontent.com/18740032/40325577-e6173a66-5d01-11e8-9f03-4c2a655c09ea.JPG)

![2](https://user-images.githubusercontent.com/18740032/40325640-33c5e5d2-5d02-11e8-8d54-441214ff2981.JPG)

![3](https://user-images.githubusercontent.com/18740032/40325651-3e4091e2-5d02-11e8-997f-d06c47467786.JPG)

![6](https://user-images.githubusercontent.com/18740032/40325677-4fa3bac2-5d02-11e8-84af-8cc4fab6b120.JPG)

![7](https://user-images.githubusercontent.com/18740032/40325678-4fc1325a-5d02-11e8-9851-a18866a8e297.JPG)

![8](https://user-images.githubusercontent.com/18740032/40325679-4fdcd06e-5d02-11e8-85f0-73bca7c9d664.JPG)

![4](https://user-images.githubusercontent.com/18740032/40325680-4ff66466-5d02-11e8-87ca-013c17713bf6.JPG)

![5](https://user-images.githubusercontent.com/18740032/40325681-5010a8b2-5d02-11e8-94e8-7f20366bb70d.JPG)


## License

This project is licensed under the MIT License
