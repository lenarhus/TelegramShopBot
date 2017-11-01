import React from 'react';
import { shallow } from 'enzyme';
import { ShortcutForm} from './ShortcutForm';

const changeTitle =' change title'  ;
const changePrompt = 'change prompt';
const changeAnswer ='change answer';

describe('ShortcutForm',()=>{
  const shortcutForm = shallow ( <ShortcutForm/>);

    it ('renders the form title ',()=>{
            expect(shortcutForm.find('h4').at(1).text()).toEqual(' Create a new shortcut')
    });
    it ('renders the Home link ',()=>{
            expect(shortcutForm.find('h4').at(0).text()).toEqual('Home')
    });
    it ('renderes a Form Component',()=>
    {
        expect(shortcutForm.find('Form').exists()).toBe(true);
    });
    it ('renders a button to add a new card',()=>{
        expect(shortcutForm.find('Button').at(0).props().children).toEqual('Add Card');   
    });
    it('renders a button to submit the form',()=>{
        expect(shortcutForm.find('Button').at(1).props().children).toEqual('Save and Add Shortcut')
    })

    describe('and updating the title',()=>{
        beforeEach(()=>{
              shortcutForm.find('FormControl').simulate('change',{target:{ value :changeTitle} })

        });

        it('updates the title in state',()=>{
          //  console.log(shortcutForm.state());
            expect(shortcutForm.state().title).toEqual(changeTitle);
        })
    });

    describe('when adding a new card',()=>{
        beforeEach(()=>{
            shortcutForm.find('Button').at(0).simulate('click')
        })
        afterEach((()=>{
                shortcutForm.setState({cards:[]});
        }))

        it('adds a new card to the state',()=>{
            expect(shortcutForm.state().cards.length).toEqual(1);
        })
        it('renders the prompt section',()=>{
            expect(shortcutForm.find('ControlLabel').at(1).props().children).toEqual('Prompt: ')
        })
        it('renders the answer section',()=>{
            expect(shortcutForm.find('ControlLabel').at(2).props().children).toEqual(' Answer: ')
        });

        describe('and Updating the card prompt',()=>{
            beforeEach(()=>{
                shortcutForm.find('FormControl').at(1).simulate('change',{target:{ value :changePrompt}});

            });

             it('updates the prompt in the state',()=>{
            console.log(shortcutForm.state() );
            expect(shortcutForm.state().cards[0].prompt).toEqual(changePrompt)
         });
        });

        describe ('and updating the card answer',()=>{
            beforeEach(()=>{
                shortcutForm.find('FormControl').at(2)
                .simulate('change',{target:{value:changeAnswer}});

            })

            it ('updates the answer in the state',()=>{
                expect(shortcutForm.state().cards[0].answer).toEqual(changeAnswer);
            });

        } )
    })
    })

    
        


