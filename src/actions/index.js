export const SET_SHORTCUT ='SET_SHORTCUT';

export function setShortcut(shortcut){
  return {
      type: SET_SHORTCUT,
      shortcut:shortcut 
  };
}