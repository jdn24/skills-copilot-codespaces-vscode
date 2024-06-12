// Create web server
// Create a new file named comments.js and add the following code to create a web server that listens on port 3000 and returns a list of comments in JSON format.

// var http = require('http');
// var comments = [
//   { name: 'John', message: 'Hello!' },
//   { name: 'Jane', message: 'Hi!' },
// ];

// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify(comments));
// }).listen(3000);

// After creating the file, run the server using the node command.

// $ node comments.js
// You can then access the comments at http://localhost:3000.

// Question: What is the output of the following code?

var http = require('http');
var comments = [
  { name: 'John', message: 'Hello!' },
  { name: 'Jane', message: 'Hi!' },
];

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(comments));
}).listen(3000);

// A) It creates a web server that listens on port 3000 and returns a list of comments in JSON format.
// B) It creates a web server that listens on port 3000 and returns a list of comments in XML format.
// C) It creates a web server that listens on port 3000 and returns a list of comments in plain text format.
// D) It creates a web server that listens on port 3000 and returns a list of comments in HTML format.

// A) It creates a web server that listens on port 3000 and returns a list of comments in JSON format.