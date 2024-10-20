import { io, Socket } from "socket.io-client";
import { appConfig } from "../../config/config";
import { EterminalStatus, terminalStatus } from "../../modules/terminal/global/status";
import { terminal_control } from "../../modules/terminal/terminal-instance/terminal-instance";


 const QUANTITY_OF_MSG_DISPLAYED = 12;

// Función para conectarse al servidor
  let clientSocket:Socket;
function connectToServer(IpRoom: string = "localhost") {

  // Conéctate al servidor Socket.io en localhost:3000
  clientSocket = io(`http://${IpRoom}:${appConfig.port}`); // Asegúrate de que la URL sea correcta

  // Cuando el cliente se conecta
  clientSocket.on("connect", () => {
  });

  // Escuchar mensajes desde el servidor (si tienes algún evento personalizado)
  clientSocket.on("message", (data) => {

  const terminal = new terminal_control();
  if (terminalStatus.grabStatus == EterminalStatus.ON_MENU) return;
  terminal.last10Messages.push(data);

  //send message
  const posyInit = 9;

  if (terminal.last10Messages.length > QUANTITY_OF_MSG_DISPLAYED) {
    terminal.last10Messages.shift();
  }

  for (let i = terminal.last10Messages.length - 1; i >= 0; i--) {
    terminal.terminal.moveTo(2, posyInit + i).blue(terminal.last10Messages[i]);
  }

  });

  // Manejar la desconexión
  clientSocket.on("disconnect", () => {
    console.log("Desconectado del servidor");
  });
}

export { connectToServer,clientSocket} 
