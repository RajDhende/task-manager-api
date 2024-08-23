# Task Manager API

A simple RESTful API for managing tasks, built with Node.js, Express, and MongoDB.

## Description

This API allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks. Each task has a title, description, and completion status. The API is designed to be used as a backend for a task management application.


## Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/RajDhende/task-manager-api.git
    cd task-manager-api
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB URI:

    ```bash
    MONGO_URI=your-mongodb-uri
    ```

4. Start the server:

    ```bash
    npm start
    ```

   The server will start on `http://localhost:3000` by default.

## Usage

### API Endpoints

#### Tasks

- **GET /api/v1/tasks** - Get all tasks
- **POST /api/v1/tasks** - Create a new task
- **GET /api/v1/tasks/:id** - Get a task by ID
- **PATCH /api/v1/tasks/:id** - Update a task by ID
- **DELETE /api/v1/tasks/:id** - Delete a task by ID

### Example Requests

To get all tasks:

```bash
curl -X GET http://localhost:3000/api/v1/tasks
