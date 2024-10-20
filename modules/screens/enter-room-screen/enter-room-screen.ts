import { connectToServer } from "../../../connections/client/client";
import { terminal_control } from "../../terminal/terminal-instance/terminal-instance";
import { chatScreen } from "../chat-screen/chat-screen";

function enterRooomScreen() {
  const terminalControl = new terminal_control();
  const terminal = terminalControl.terminal;

  console.clear();

  terminalControl.cursorX = 15;
  terminalControl.cursorY = 1;

  terminal.green("Enter room Ip: ");
  terminal.inputField({}, (error, input) => {
    chatScreen(input);
  });
}

export { enterRooomScreen };
