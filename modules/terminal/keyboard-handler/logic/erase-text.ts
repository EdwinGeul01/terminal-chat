import { Terminal } from "terminal-kit";
import { terminal_control } from "../../terminal-instance/terminal-instance";

export function eraseText() {
  const terminal = new terminal_control();

  if (terminal.text.length === 0) return;
  terminal.terminal.moveTo(2 + terminal.text.length - 1, 25).white(" ");
  terminal.text = terminal.text.slice(0, -1);
  terminal.terminal.moveTo(2, 25).white(terminal.text);
}
