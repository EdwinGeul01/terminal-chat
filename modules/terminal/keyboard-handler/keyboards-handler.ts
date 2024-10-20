import { EterminalStatus, terminalStatus } from "../global/status";
import { terminal_control } from "../terminal-instance/terminal-instance";
import { eraseText } from "./logic/erase-text";
import { quitApp } from "./logic/quit-app";
import { sendMsg } from "./logic/send-msg";

// activa las escuchas  de acciones del teclado
function keyboardHandler() {
  const terminal = new terminal_control();

  terminal.terminal.on("key", (name: string) => {
    if (terminalStatus.grabStatus == EterminalStatus.ON_MENU) return;

    if (name === "BACKSPACE") {
      eraseText(); //remueve el ultimo caracter
    } else if (name === "CTRL_C") {
      quitApp(); // sale de la aplicacion
    } else if (name === "ENTER") {
      sendMsg(); //envia el mensaje
    } else {
      //agrega el caracter al texto de la instancia del terminal
      terminal.text += name;
      terminal.terminal.moveTo(terminal.cursorX, terminal.cursorY).white(terminal.text);
    }
  });
}

export default keyboardHandler;
