import term from "terminal-kit";
import keyboardHandler from "../keyboard-handler/keyboards-handler";

export class terminal_control {
  private static instance: terminal_control;


  constructor() {
    if (terminal_control.instance) {
      return terminal_control.instance;
    }
    terminal_control.instance = this;
    keyboardHandler();
  }

  public terminal = term.terminal;
  public text = "";
  public last10Messages: string[] = [];
  public cursorY = 25;
  public cursorX = 2;
}
