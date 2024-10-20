import { clientSocket } from "../../../../client/create-client-connection/create-client-connection";
import { EterminalStatus, terminalStatus } from "../../global/status";
import { terminal_control } from "../../terminal-instance/terminal-instance";

export function sendMsg() {
  const terminal = new terminal_control();

  clientSocket.emit("message", terminal.text);

  terminal.text = "";
  for (let i = 0; i < terminal.text.length; i++) {
    terminal.terminal.moveTo(2 + i, 25).white(" ");
  }
  terminal.terminal.moveTo(2, 25).white(terminal.text);
}
