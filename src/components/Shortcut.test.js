import React from 'react';
import { shallow } from 'enzyme';
import { Shortcut } from './Shortcut';

const props  = {
    Shortcut :{
        id:0,
        title: 'test title',
        cards : [{ id:0,prompt:'test prompt',answer:'test answer'}]
    }

};

describe ('Shortcut', () => {
    const Shortcut = shallow(<Shortcut {...props }/>);

})