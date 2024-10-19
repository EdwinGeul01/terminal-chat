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

let text = "";
terminal.on("key", (name: string) => {
  if (terminalStatus.grabStatus == EterminalStatus.ON_MENU) return;
  text += name;
  terminal.moveTo(2, 25).white(text);

  if (name === "CTRL_C") {
    quitApp();
  }
});

terminal.on("terminal", function (name: string, data: any) {
  // console.log( "'terminal' event:" , name , data ) ;
});

export default terminal;
