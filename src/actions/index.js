export const SET_SHORTCUT ='SET_SHORTCUT';
export const LOAD_SHORTCUTS = 'LOAD_SHORTCUTS';

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