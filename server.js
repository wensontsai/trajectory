const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

// our localhost port
const port = 4001;

const app = express();

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

// This is what the socket.io syntax is like, we will work this later
io.on("connection", socket => {
    console.log("User connected");

    // just like on the client side, we have a socket.on method that takes a callback function
    socket.on("add bid", bid => {
        // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
        // we make use of the socket.emit method again with the argument given to use from the callback function above
        console.log("new bid record: ", bid);
        io.sockets.emit("update bid book", bid);
    });

    socket.on("add sell", sell => {
        // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
        // we make use of the socket.emit method again with the argument given to use from the callback function above
        console.log("new sell record: ", sell);
        io.sockets.emit("update sell book", sell);
    });

    // disconnect is fired when a client leaves the server
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
