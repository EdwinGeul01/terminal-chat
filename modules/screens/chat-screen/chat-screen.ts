import { connectToServer } from "../../../connections/client/client";
import { startServer } from "../../../connections/server/server";
import { EterminalStatus, terminalStatus } from "../../terminal/global/status";
import { terminal_control } from "../../terminal/terminal-instance/terminal-instance";
import ip from "ip";

//imprime la interfaz de chat
export function chatScreen(IpRoom?: string) {
  //establece el estado de la terminal como en escucha de teclado
  terminalStatus.grabStatus = EterminalStatus.LISTENING;
  console.clear();

  // si no hay una ip de la sala, inicia el servidor con la ip de la computadora
  if (!IpRoom) {
    startServer();
  }
  connectToServer(IpRoom);

  const terminalControl = new terminal_control();
  const terminal = terminalControl.terminal;

  //posiciona el cursor en la parte inferior de la pantalla para escribir
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
