# Blog App

A simple Blog Application built using Node.js, Express.js, and EJS.
This project allows users to create, edit, update, and delete blog posts using a clean UI and server-side rendering.

---

## Features

* Create new blog posts
* View all blogs
* Edit existing blogs
* Delete blogs
* Form validation using middleware
* Error handling middleware
* EJS templating
* Static CSS styling
* MVC folder structure

---

## Tech Stack

* Node.js
* Express.js
* EJS
* CSS

---

## Project Structure

```bash
project/
│
├── controllers/
├── middleware/
├── public/
│   └── css/
├── routes/
├── views/
├── app.js
├── package.json
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/vanran920/Blog_App_No_DataBase
```

Move into project folder:

```bash
cd blog-app-practice
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

or

```bash
node server.js
```

---

## Middleware Used

### Logger Middleware

Logs incoming requests.

### Validation Middleware

Checks if title and content fields are filled.

### Error Handler Middleware

Handles server-side errors gracefully.

---

## Learning Outcomes

Through this project I learned:

* Express Routing
* Middleware
* EJS Templating
* CRUD Operations
* MVC Structure
* Handling Forms
* Static Files in Express
* Error Handling

---

## Future Improvements

* MongoDB Database Integration
* User Authentication
* Flash Messages
* Better UI Design
* Rich Text Editor

---

## Author

Made by Vansh Rana
