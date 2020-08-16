## Fullstack test

To download and use the project locally follow the steps bellow:

### 1. Step One

Open your terminal

Create a folder in your pc and name it as you want.

### `mkdir folder-name`

### `cd folder-name`

### 2. Step Two

    Clone the respository so you can use it locally

### `git clone https://github.com/Abeldlp/fullstacktest.git`

once downloaded travel to the repository.

### `cd fullstacktest`

### 3. Step Three

Install the dependencies for the backend.

### `npm install`

Install the dependencies for the frontend.

### `cd client`

### `npm install`

### 4. Step Four

Once everything is set-up open a new terminal and got to the root folder.
(This is with the terminal you just opened, the other one must remain in the client folder)

### `cd fullstacktest`

### `nodemon server`

**Note: The server runs on server `8000`, if you want to change it, go to server.js and change the PORT.**

### 5. Step Five

With the first terminal you had (currently in the client directory) start the frontend development server.

### `npm start`

Your default browser should open and start running on port 3000

Now locally you are using your port 3000 to serve the backend and the port 8000 to serve the backend.

Additionally, if you want to run new test files.
Create the files on the src folder.

### `npm test`
