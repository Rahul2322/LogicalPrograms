const fs = require('fs');
const {Transform} = require('stream')

// const writeStream =fs.createWriteStream("./data.txt");
// writeStream.write("hello world\n");
// writeStream.write("I am Rahul\n");
// writeStream.end(()=>{
//     console.log('Completing writing to a file');
    
// })

const readStream = fs.createReadStream('data.txt',{encoding:'utf-8'});
let str = '';
readStream.on('data',(chunk)=>{
    str+=chunk;
})

readStream.on('end',()=>{
    console.log('completed reading file',str);
    
})

readStream.on('error',(err)=>{
console.log('something went wrong',err);

})

const toUpperCase = new Transform({
    transform(chunk,encoding,cb){
        this.push(chunk.toString().toUpperCase());
        cb()
    }
})

readStream.pipe(toUpperCase).pipe(process.stdout)

const fs = require('fs');
const csv = require('csv-parser');

// Create a readable stream to the CSV file
const results = [];

fs.createReadStream('data.csv') // Replace with your file path
  .pipe(csv()) // Parse the CSV
  .on('data', (data) => {
    results.push(data); // Push each row (record) to the results array
  })
  .on('end', () => {
    console.log(results); // Output the parsed data
  });
/*
The Reactor Pattern is a design pattern used to handle asynchronous I/O operations. It works by using an event-driven architecture to react to events such as incoming data, user actions, or other I/O events. Node.js is built around the Reactor Pattern, making it a natural fit for handling asynchronous I/O operations in an efficient manner.

In Node.js, the Reactor Pattern is implemented using the Event Loop and Event Emitters. The Event Loop continuously checks for events, handles them, and delegates the actual work to appropriate handlers, all in a non-blocking way. This enables Node.js to handle many I/O-bound tasks concurrently without the need for threads

*/

/*
fork:
Specifically used to create a new Node.js process that runs a separate instance of the Node.js event loop. 
can communicate with the parent process using IPC (Inter-Process Communication).

spawn:
It is a more general-purpose function for spawning child processes, not limited to Node.js scripts. It can be used to execute any kind of command or external program (e.g., running shell commands, executing Python scripts, etc.).

It does not provide built-in support for communication with the parent process beyond basic input/output streams.

*/

/*
Presentation Layer (Client Layer or Frontend):

This layer is responsible for user interface and interaction. In the context of Node.js, the presentation layer might involve rendering HTML pages, views, or interacting with APIs via HTTP requests.

Business Logic Layer (Application Layer or Server Layer):

This layer contains the core logic of the application. In a Node.js environment, this would be the backend server, where most of the processing happens.

Data Layer (Database Layer or Persistence Layer):

This layer is responsible for storing and managing data. It interacts with the database to retrieve, modify, or delete data as required by the business logic layer.

*/


/*
The View binds to the ViewModel to get the necessary data.
When the View is updated (e.g., user input), the ViewModel processes this input and updates the Model.
The Model interacts with the database, external APIs, or other data sources to retrieve or modify data.
The ViewModel receives updated data from the Model and provides it in a format suitable for the View to display.
The View is automatically updated when the ViewModel changes.
Benefits of MVVM Architecture:
Separation of Concerns: The View is separated from the logic and data, making the code easier to maintain and test.
Two-way Data Binding: Changes in the Model or ViewModel can automatically reflect in the View, and user actions in the View can update the Model.

*/



/*
In Node.js, dynamic module importing refers to the ability to import modules at runtime, rather than statically at the top of the file. This can be useful when you need to conditionally load modules or avoid loading certain modules until they are actually needed.

1. Using import() (ES Modules)
In modern JavaScript (ESM - ECMAScript modules), you can use the import() function to dynamically import a module at runtime. This is an asynchronous operation that returns a promise, which resolves to the module.
*/



/*
"Event-driven architecture is a design pattern where the flow of the application is driven by events or messages. It consists of producers that generate events and consumers that respond to those events. The system is loosely coupled, meaning components are independent and communicate through events, which allows for better scalability and flexibility. For example, in a real-time messaging app, sending a message triggers an event that notifies the recipient, and various services like notifications, logs, or analytics may consume this event asynchronously.

*/