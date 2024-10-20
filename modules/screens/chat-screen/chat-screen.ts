import { connectToServer } from "../../../client/create-client-connection/create-client-connection";
import { startServer } from "../../../server/server";
import { EterminalStatus, terminalStatus } from "../../terminal/global/status";
import { terminal_control } from "../../terminal/terminal-instance/terminal-instance";
import ip from "ip";

export function chatScreen(IpRoom?: string) {
  terminalStatus.grabStatus = EterminalStatus.LISTENING;
  console.clear();
  if (!IpRoom) {
    startServer();
  }
  connectToServer(IpRoom);

  const terminalControl = new terminal_control();
  const terminal = terminalControl.terminal;

  terminalControl.cursorX = 2;
  terminalControl.cursorY = 25;

  if (!IpRoom) IpRoom = ip.address();

  terminal.white("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n");
  terminal.white("┃                                       ┃\n");
  terminal.white("┃  Welcome to the terminal chat app     ┃\n");
  terminal.white("┃                                       ┃\n");
  terminal.white("└───────────────────────────────────────┘\n");
  terminal.white("IP del Room: " + IpRoom + "          \n");
  terminal.white("\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n");
  terminal.white("┃                                                                                          ┃\n");
  terminal.white("┃                                                                                          ┃\n");
  terminal.white("┃                                                                                          ┃\n");
  terminal.white("┃                                                                                          ┃\n");
  terminal.white("┃                                                                                          ┃\n");
  terminal.white("┃                                                                                          ┃\n");
  terminal.white("┃                                                                                          ┃\n");
  terminal.white("┃                                                                                          ┃\n");
  terminal.white("┃                                                                                          ┃\n");
  terminal.white("┃                                                                                          ┃\n");
  terminal.white("┃                                                                                          ┃\n");
  terminal.white("┃                                                                                          ┃\n");
  terminal.white("└──────────────────────────────────────────────────────────────────────────────────────────┘\n");

  terminal.moveTo(1, 25).green(">");
}
