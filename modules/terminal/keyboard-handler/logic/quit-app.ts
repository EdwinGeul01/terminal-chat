import { terminal_control } from "../../terminal-instance/terminal-instance";

export function quitApp() {
  const terminal = new terminal_control();
  terminal.terminal.grabInput(false);
  setTimeout(function () {
    process.exit();
  }, 100);
}
