import { clientSocket } from "../../../../client/create-client-connection/create-client-connection";
import { EterminalStatus, terminalStatus } from "../../global/status";
import { terminal_control } from "../../terminal-instance/terminal-instance";

export function sendMsg() {
  const terminal = new terminal_control();
  clientSocket.emit("message", terminal.text);
}
