import { clientSocket } from "../../../../connections/client/client";
import { terminal_control } from "../../terminal-instance/terminal-instance";

export function sendMsg() {
  const terminal = new terminal_control();

  clientSocket.emit("message", terminal.text);

  for (let i = 0; i < terminal.text.length; i++) {
    terminal.terminal.moveTo(2 + i, 25).white(" ");
  }
  terminal.text = "";

  terminal.terminal.moveTo(terminal.cursorX, terminal.cursorY).white(terminal.text);
}
