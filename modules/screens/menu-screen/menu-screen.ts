import { Terminal } from "terminal-kit";
import { terminal_control } from "../../terminal/terminal-instance/terminal-instance";
import { chatScreen } from "../chat-screen/chat-screen";
import { enterRooomScreen } from "../enter-room-screen/enter-room-screen";

//opciones del menu principal
const mainMenuOptions = ["Create new Room", "Join to Room", "Exit"];

// acciones a realizar segun la opcion seleccionada
function responseHandler(error: any, response: Terminal.SingleColumnMenuOptions) {
  const terminalControl = new terminal_control();
  const terminal = terminalControl.terminal;

  switch (response.selectedIndex) {
    case 0:
      chatScreen();
      break;
    case 1:
      enterRooomScreen();
      break;
    case 2:
      terminal.green("\n");
      process.exit();
      break;
    default:
      break;
  }
}

function drawMainMenu() {
  const terminalControl = new terminal_control();
  const terminal = terminalControl.terminal;

  function drawTitle() {
    terminal.white("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n");
    terminal.white("┃                                       ┃\n");
    terminal.white("┃  Welcome to the terminal chat app     ┃\n");
    terminal.white("┃                                       ┃\n");
    terminal.white("└───────────────────────────────────────┘\n");
  }

  drawTitle();

  terminal.singleColumnMenu(mainMenuOptions, responseHandler);
}

export { drawMainMenu };
