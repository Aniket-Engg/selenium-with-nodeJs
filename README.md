## Sample Record and Replay
In this , we capture user click events along with the form data.

## How to setup
Make sure you have [Node.js](https://nodejs.org/en/download/) installed on your system.
```
Clone project and move to project directory
npm install    // to install all required dependencies
npm start     // To start server
```
Server will be up.

## Record
When server is up, a sample page will be displayed at [http://localhost:3000](http://localhost:3000)

Any activity performed by user on this page will be recorded in a JSON file.

## Replay
By accessing the `record.json` file any number of user events can be replayed. See `replay.js`.

Replay has been implemented using Selenium WebDriver.
