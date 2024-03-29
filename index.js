var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log("connected");
  socket.on("chat message", function(msg) {
    console.log("message: " + msg);
    io.sockets.emit("sent message", msg);
  });
  socket.on("typing", data => {
    console.log(data);
  });
});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
