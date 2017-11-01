import React from 'react';
import { shallow } from 'enzyme';
import { ShortcutList } from './ShortcutList';
import { shortcuts} from '../data/fixtures';


const props ={shortcuts};

describe('ShortcutList',()=>{
    const shortcutList = shallow(<ShortcutList{...props}/>);

    it ('renders the correct number of  links',()=>{
        expect(shortcutList.find('Link').length).toEqual(props.shortcuts.length);

    });
} ); 