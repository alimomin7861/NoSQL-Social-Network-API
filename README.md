# NoSQL Social Network API

## Badges
![MIT License](https://img.shields.io/badge/license-MIT%20License-green)

## Description
This project is a social network API built using Express.js, MongoDB, and Mongoose. It provides a backend solution for a social networking web application where users can share their thoughts, react to friends' thoughts, and manage their friend lists. The API utilizes a NoSQL database to handle large amounts of unstructured data efficiently.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Installation
To use this API, follow these steps:
1. Make sure you have Node.js installed. If not, you can download it from the official Node.js website: [https://nodejs.org/en/](https://nodejs.org/en/).
2. Clone or download the repository to your local machine.
3. Open a terminal or command prompt and navigate to the project's directory.
4. Install the dependencies by running the following command: `npm install`
5. Set up your MongoDB database and obtain the connection URI.
6. Create a `.env` file in the root directory of the project and add the following line, replacing `<connection_uri>` with your MongoDB connection URI: `MONGODB_URI=<connection_uri>`
7. Save the `.env` file.

## Usage
To start the server and sync the Mongoose models with the MongoDB database, run the following command in the terminal or command prompt: `npm start`

### API Routes

#### Users
- **GET /api/users**: Retrieves all users from the database.
- **GET /api/users/:userId**: Retrieves a specific user by their ID.
- **POST /api/users**: Creates a new user.
- **PUT /api/users/:userId**: Updates a user's details.
- **DELETE /api/users/:userId**: Deletes a user.

#### Thoughts
- **GET /api/thoughts**: Retrieves all thoughts from the database.
- **GET /api/thoughts/:thoughtId**: Retrieves a specific thought by its ID.
- **POST /api/thoughts**: Creates a new thought.
- **PUT /api/thoughts/:thoughtId**: Updates a thought's details.
- **DELETE /api/thoughts/:thoughtId**: Deletes a thought.

#### Reactions
- **POST /api/thoughts/:thoughtId/reactions**: Adds a reaction to a thought.
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**: Removes a reaction from a thought.

## Tests
No tests are provided in this project.


## Questions
Questions can be directed to this GitHub profile or this email.

GitHub: [alimomin7861](https://github.com/alimomin7861)

Email: [alimomin7861@gmail.com](mailto:alimomin7861@gmail.com)

## Contributing
N/A

## Credits
There are no additional contributors to this project.

## License
MIT License

Copyright (c) 2023 Ali Momin

## Walkthrough Video
Please find the walkthrough video demonstrating the functionality of the app here: [https://drive.google.com/file/d/1TsHdBmwKi6jocZueEtwXcLSj7HlL6mro/view]