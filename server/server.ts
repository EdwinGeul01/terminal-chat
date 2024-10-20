import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { appConfig } from "../config/config";

// Instancia de Express
const app = express();

// Crea el servidor HTTP y lo compartes con Express y Socket.io
const httpServer = createServer(app);
const io = new Server(httpServer); // Usa el mismo servidor HTTP

// Función para iniciar el servidor
function startServer() {
  // Ruta de ejemplo en Express
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // Conexión de Socket.io
  io.on("connection", (socket: Socket) => {

    // Puedes emitir eventos o escuchar eventos del cliente aquí
    socket.on("disconnect", () => {
      console.log("A user disconnected", socket.id);
    });

    socket.on("message", (data) => {
      // Puedes emitir eventos a todos los clientes conectados
      io.emit("message", data);
    });


  });



  // Inicia el servidor HTTP, compartido entre Express y Socket.io
  httpServer.listen(appConfig.port, () => {
  });
}

export { startServer, app, io, httpServer };
