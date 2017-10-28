export const SET_SHORTCUT ='SET_SHORTCUT';
export const LOAD_SHORTCUTS = 'LOAD_SHORTCUTS';
export const ADD_SHORTCUT = 'ADD_SHORTCUT';

export function setShortcut(shortcut){
  return {
      type: SET_SHORTCUT,
      shortcut:shortcut 
  };
} 

export function loadShortcuts(shortcuts){
  return{
    type: LOAD_SHORTCUTS,
    shortcuts

  }
}

export function addShortcut(shortcut){
  return{
    type:ADD_SHORTCUT,
    shortcut
  }

}