export enum EterminalStatus {
  ON_MENU = 0,
  LISTENING = 1,
}


//clase para determinar el estado de la terminal 
// en escucha de teclado o en menu
export class terminalStatus {
  static grabStatus = EterminalStatus.ON_MENU;
}
