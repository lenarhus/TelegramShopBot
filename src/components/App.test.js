import React from 'react';
import { mount } from 'enzyme'; 
import App from './App.js';

describe('App',()=>{
 let app = mount (<App/>);
 it('renders the App title',()=>{
     
     expect(app.find('h2').text()).toEqual('Your mental test this for CI third time');
 })
});
