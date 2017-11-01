import React from 'react';
import { shallow } from 'enzyme';
import {Shortcut} from './Shortcut';
import { shortcut } from '../data/fixtures';




const props = { shortcut };

describe ('Shortcut', ()=>{
    const shortcut = shallow(<Shortcut {...props}/>);
    
    it ('renders the title ',()=>{
           // console.log(shortcut.debug());
           expect(shortcut.find('h3').text()).toEqual(props.shortcut.title)
    })

    it('renders the Link go back',()=>{
        expect(shortcut.find('Link h4').text()).toEqual('Go back');
    })

    it(' renders the correct number of cards',()=>{
        expect(shortcut.find('Card').length).toEqual(props.shortcut.cards.length)
    })

    
})   