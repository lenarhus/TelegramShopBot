import * as actions from './index';
import { shortcut, shortcuts } from '../data/fixtures';

describe('actions',()=>{
    it('creates an action to set the main stack',()=>{
      const expectedAction = { type :actions.SET_SHORTCUT, shortcut
        }  ;
        expect(actions.setShortcut(shortcut)).toEqual(expectedAction);
    });

it ('creates an action to add a shortcut',()=>{
    const expectedAction ={ type: actions.ADD_SHORTCUT,shortcut};
    expect(actions.addShortcut(shortcut)).toEqual(expectedAction);
})


it('creates an action to load shortcuts',()=>{
    const expectedAction = {
        type: actions.LOAD_SHORTCUTS,shortcuts
    };
    expect(actions.loadShortcuts(shortcuts)).toEqual(expectedAction);


})

})