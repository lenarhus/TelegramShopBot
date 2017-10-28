import { combineReducers } from 'redux';
import { SET_SHORTCUT,LOAD_SHORTCUTS, ADD_SHORTCUT } from  '../actions';

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
        case ADD_SHORTCUT:
         return[...state,{...action.shortcut,id: state.length}];
        default:
          return state;
    }
}

export default combineReducers({shortcut,shortcuts})