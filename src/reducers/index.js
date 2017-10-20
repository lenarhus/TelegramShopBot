import { SET_SHORTCUT } from  '../actions';

function shortcut(state={},action){
    switch(action.type){
        case SET_SHORTCUT:
             return action.shortcut;
          default:
             return state;

    }
} 

export default shortcut;