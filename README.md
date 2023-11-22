# E-commerce Back End

## Technology Used

| Technology | Resource URL                                             |
|------------|----------------------------------------------------------|
| Node.js    | [Node.js](https://nodejs.org/)                           |
| Express.js | [Express.js](https://expressjs.com/)                     |
| Sequelize  | [Sequelize](https://sequelize.org/)                      |
| MySQL      | [MySQL](https://www.mysql.com/)                          |
| JavaScript | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |

## Description

The E-commerce Back End application is a server-side application that enables internet retail businesses to manage their product inventory through a RESTful API. It uses Express.js to set up the server and Sequelize as an ORM to interact with a MySQL database. This back end can be integrated with any front-end e-commerce system to manage categories, products, and tags.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Walkthrough Video](#walkthrough-video)
- [Author Info](#author-info)
- [Credits](#credits)
- [License](#license)

## Installation

1. Clone the repository: `git@github.com:nba251522/E-commerce-Back-End.git`
2. Navigate to the project directory and install dependencies with `npm install`.
3. Configure your MySQL credentials in an `.env` file.
4. Create the database using MySQL shell commands found in `db/schema.sql`.
5. Seed the database with `npm run seed`.
6. Start the application with `npm start`.

## Usage

- After starting the server, access the API endpoints through tools like Insomnia Core or Postman.
- The API can be used to perform CRUD operations on categories, products, and tags in your e-commerce database.

## Features

- RESTful API for managing e-commerce inventory.
- CRUD operations for categories, products, and tags.
- Integration with MySQL database using Sequelize ORM.
- Data validation and error handling.

## Walkthrough Video

A comprehensive walkthrough video demonstrating the application functionality is available [here](https://youtu.be/WBrkqL830yI). This video includes steps for setting up the database, seeding data, and interacting with all API endpoints.

## Author Info

**Thomas Er**
- [LinkedIn](https://www.linkedin.com/in/thomas-er-9b77321b9)
- [Github](https://github.com/nba251522)
- [Portfolio](https://nba251522.github.io/thomas-er-porfolio/)

## Credits

This project was developed using the following resources:
  - [Express.js Documentation](https://expressjs.com/en/5x/api.html)
  - [Sequelize Documentation](https://sequelize.org)