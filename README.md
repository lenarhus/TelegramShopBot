# Identifying Errors and fixing them

### Error 1

Invariant Violation: Could not find "store" in either the context or props of "Connect(ShortcutList)". 
Either wrap the root component in a
 <Provider>, 
or explicitly pass "store" as a prop to "Connect(ShortcutList)".

above error was encountered when running the app.test.js file with the following code:


```javascript
import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App',()=>{
    const app = mount (<App/>);
    
})
```

Above app component has an inner child called shortcutlist -a connected redux component so in order for us to mount this app
we need to provide things that redux provide (like the store) if you look at the index.js file we were providing store to ever
y single component by wrapping a provider but in our app.test.js we are just mounting the component so it wont have that context 
of store what as an alternative we do is -shallow render just like below:



```javascript
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App',()=>{
    const app = shallow (<App/>);
    
})
```

 
### Error 2

Above error was fixed by using shallow function ,why does the shortcut.test.js with the above code still gives a similar error

Becz before we could shallow render the inner connected shortcutlist but in the case of shortcut  is a whole component is a
connected react component so even if we shallow render the shortcut the test runner would expect us to provide the 
store 	object in either the context or the props so we do the application by the provider wrapper but this is how we 
simulate the environment in the shortcut test component
we export the whole class and then import the shortcut from ./shortcut with in the pair of curly braces



### Error 3 Shortcut › encountered a declaration exception

    TypeError: Cannot match against 'undefined' or 'null'.

this is bcz props are not defined in the shortcut test component
we can define as shown below:



```javascript
const props = {
 shortcut: {
     id:0,   title:'test title', cards:[
         {id:0,prompt: 'test prompt', answer:'test answer'},
         {id :1, prompt: 'test prompt 2', answer:'test answer'}
         
         
         ]
 }
}

describe ('Shortcut', ()=>{
    const shortcut = shallow(<Shortcut {...props}/>);
```



### Error 4 ShortcutForm › renders the form title

    Method “text” is only meant to be run on a single node. 2 found instead.


this error is thrown because the shortcutform has more than one h4 element therefore we will be getting the error as it is not 
specified which h4 tag 



```javascript
  it ('renders the form title ',()=>{
        expect(shortcutForm.find('h4').text()).toEqual('Create a New shortcut')
  });
```


we can change the above code to the following or add at(1) to the h4 tag like below:


```javascript
it ('renders the form title ',()=>{
            expect(shortcutForm.find('h4').at(1).text()).toEqual(' Create a new shortcut')
    });
```