import rootReducer from './index';
import * as actions from  '../actions';
import {shortcut,shortcuts} from '../data/fixtures';

describe ('root reducer',  ()=>{
    it('returns the initial state', ()=>{
        expect (rootReducer({},{})).toEqual({shortcut: {}, shortcuts:[]});
    })
    it('sets the main shortcut',()=>{
        expect(rootReducer({},{
            type:actions.SET_SHORTCUT,shortcut
        })).toEqual({shortcut,shortcuts:[]})
 })
 it('loads shortcuts',()=>{
     expect(rootReducer({},{type: actions.LOAD_SHORTCUTS,shortcuts }))
     .toEqual({shortcut: {},shortcuts});
 })

 it('adds a Stack',()=>{
     const testShortcut = { title : 'data',cards:[] }
     expect(rootReducer({},{type:actions.ADD_SHORTCUT,shortcut:testShortcut})).toEqual({shortcut:{},shortcuts:[{...testShortcut,id:0}]})
 })

})