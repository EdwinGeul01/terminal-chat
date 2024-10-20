import { io, Socket } from "socket.io-client";
import { appConfig } from "../../config/config";
import { EterminalStatus, terminalStatus } from "../../modules/terminal/global/status";
import { terminal_control } from "../../modules/terminal/terminal-instance/terminal-instance";


 const QUANTITY_OF_MSG_DISPLAYED = 12;

let clientSocket:Socket;

//conexion al servidor
function connectToServer(IpRoom: string = "localhost") {

  // socket del cliente al servidor
  clientSocket = io(`http://${IpRoom}:${appConfig.port}`); 
  clientSocket.on("connect", () => {
  });


  //al recibir un mensaje
  clientSocket.on("message", (data) => {


   const terminal = new terminal_control();
  if (terminalStatus.grabStatus == EterminalStatus.ON_MENU) return;
  terminal.last10Messages.push(data);

  //send message
  const posyInit = 9;

  // si hay mas de 12 mensajes, se elimina el primero
  if (terminal.last10Messages.length > QUANTITY_OF_MSG_DISPLAYED) {
    terminal.last10Messages.shift();
  }

  // se imprimen los mensajes
  for (let i = terminal.last10Messages.length - 1; i >= 0; i--) {
    terminal.terminal.moveTo(2, posyInit + i).blue(terminal.last10Messages[i]);
  }

  //mueve el cursor a la posicion de escritura
  terminal.terminal.moveTo(terminal.cursorX, terminal.cursorY).white(terminal.text);

  });

  //al desconectarse del servidor  
  clientSocket.on("disconnect", () => {
    console.log("Desconectado del servidor");
  });
}

export { connectToServer,clientSocket} 
