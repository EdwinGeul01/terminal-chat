import { Terminal } from "terminal-kit";
import { EterminalStatus, terminalStatus } from "../global/status";
import terminal from "../terminal";
import ip from "ip";

/**
 * Draw the main menu
 */
function drawMainMenu() {
  function drawTitle() {
    terminal.white("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n");
    terminal.white("┃                                       ┃\n");
    terminal.white("┃  Welcome to the terminal chat app     ┃\n");
    terminal.white("┃                                       ┃\n");
    terminal.white("└───────────────────────────────────────┘\n");
  }
  drawTitle();
  //drawing the menu options

  const mainMenuOptions = ["Create new Room", "Join to Room", "Exit"];

  function responseHandler(error: any, response: Terminal.SingleColumnMenuOptions) {
    terminalStatus.grabStatus = EterminalStatus.LISTENING;
    if (response.selectedIndex === 0) {
      console.clear();
      drawChatLog();
      terminal.moveTo(1, 25).green(">");
    } else if (response.selectedIndex === 1) {
      terminal.green("Enter the Ip Room : \n");
    } else if (response.selectedIndex === 2) {
      terminal.green("\n");
      process.exit();
    }
  }

  terminal.singleColumnMenu(mainMenuOptions, responseHandler);
}

function drawChatLog() {
  const localIp = ip.address();

  terminal.white("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n");
  terminal.white("┃                                       ┃\n");
  terminal.white("┃  Welcome to the terminal chat app     ┃\n");
  terminal.white("┃                                       ┃\n");
  terminal.white("└───────────────────────────────────────┘\n");
  terminal.white("Your Ip is: " + localIp + "          \n");
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
}

export { drawMainMenu, drawChatLog };
