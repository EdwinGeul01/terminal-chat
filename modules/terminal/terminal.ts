// create a new terminal listening for the keypress events
import term from "terminal-kit";
import { EterminalStatus, terminalStatus } from "./global/status";

const terminal = term.terminal;

function quitApp() {
  terminal.grabInput(false);
  setTimeout(function () {
    process.exit();
  }, 100);
}

terminal.grabInput({ mouse: "button" });
const last10Messages: string[] = [];

let text = "";
terminal.on("key", (name: string) => {
  if (terminalStatus.grabStatus == EterminalStatus.ON_MENU) return;
  //remove last character
  if (name === "BACKSPACE") {
    if (text.length === 0) return;
    terminal.moveTo(2 + text.length - 1, 25).white(" ");
    text = text.slice(0, -1);
    terminal.moveTo(2, 25).white(text);
  } else if (name === "CTRL_C") {
    quitApp();
  } else if (name === "ENTER") {
    last10Messages.push(text);

    //send message
    const posyInit = 9;
    const QUANTITY_OF_MSG_DISPLAYED = 12;


    if (last10Messages.length > QUANTITY_OF_MSG_DISPLAYED) {
      last10Messages.shift();
    }

    for (let i = last10Messages.length - 1; i >= 0; i--) {
      terminal.moveTo(2, posyInit + i).blue(last10Messages[i]);
    }

    for (let i = 0; i < text.length; i++) {
      terminal.moveTo(2 + i, 25).white(" ");
    }
    text = "";
    terminal.moveTo(2, 25).white(text);
  } else {
    text += name;
    terminal.moveTo(2, 25).white(text);
  }
});

terminal.on("terminal", function (name: string, data: any) {});

export default terminal;
