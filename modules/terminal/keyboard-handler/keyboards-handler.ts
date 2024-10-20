import { EterminalStatus, terminalStatus } from "../global/status";
import { terminal_control } from "../terminal-instance/terminal-instance";
import { eraseText } from "./logic/erase-text";
import { quitApp } from "./logic/quit-app";
import { sendMsg } from "./logic/send-msg";

function keyboardHandler() {
  const terminal = new terminal_control();

  terminal.terminal.on("key", (name: string) => {
    if (terminalStatus.grabStatus == EterminalStatus.ON_MENU) return;

    //remove last character
    if (name === "BACKSPACE") {
      eraseText();
    } else if (name === "CTRL_C") {
      quitApp();
    } else if (name === "ENTER") {
      sendMsg();
    } else {
      terminal.text += name;
      terminal.terminal.moveTo(terminal.cursorX, terminal.cursorY).white(terminal.text);
    }
  });
}

export default keyboardHandler;
