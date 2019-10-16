import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3000");

function sendMessage(message) {
  console.log("in sendMessage");
  socket.emit("chat", message);
}

function receiveMessage() {
  socket.on("chat", function(data) {});
}

export { sendMessage, receiveMessage };
