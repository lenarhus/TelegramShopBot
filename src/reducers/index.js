import { combineReducers } from 'redux';
import { SET_SHORTCUT,LOAD_SHORTCUTS } from  '../actions';

function shortcut(state={},action){
    switch(action.type){
        case SET_SHORTCUT:
             return action.shortcut;
          default:
             return state;

    }
} 

function shortcuts(state =[],action ){
    switch(action.type){
        case LOAD_SHORTCUTS:
         return action.shortcuts;
        default:
          return state;
    }
}

export default combineReducers({shortcut,shortcuts})