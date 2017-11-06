import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App',()=>{
    const app = shallow (<App/>);

    it('renders the title of the app',()=>{
            expect(app.find('h2').text()).toEqual('Mental Shortcuts 2')
    });

    it ('renders a link to create a new stack',()=>{
        expect(app.find( 'Link h4' ).text()).toEqual('Create a new shortcut');
    })

})