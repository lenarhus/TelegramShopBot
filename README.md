### Declaring with var ,let and const + 	function scopes and block scopes


var -variables in block scopes are accessible from outside but not var variables in 
function scopes

Thus this becomes a problem in for loops like below
```javascript
 for(var i=0 ;i<10 ;i++){}
```
but we can use the key word let instead of var to make it protected outside the block scope

### Call Stack in JS
```javascript
const add = (a, b) => a+b;

const double = (a) => add(a, a);

const printDouble = (a) => {
  const output = double(a);
  console.log(output);
};

printDouble(9);

```

We get the following error when we have 


### Higher Order Function

```javascript
function hofFunc1(argumentFunc){
	assert(typeof argumentFunc === 'function');
}

hofFunc1(function(){});

function hofFunc2(){
	return function(){};
}

assert (typeof hofFunc2() === 'function');

```

### another higher order function -map

```javascript
const newArray = [1,2,3].map(e=>e*e);
console.log(newArray);//output = 1 4 9 

//or to make it obvious

function square(e){
 return e*e
}

const newArray = [1,2,3].map(square);
console.log(newArray)//1 4 9
```

### filter : yet another higher order function
```javascript
function isOdd(e){
 return e%2 === 1
}

const newArray = [1,2,3].filter(isOdd);

console.log(newArray)//1 3
```

#### What does 'functions are first class objects' mean ? 
Functions in JS can be treated as any other JS object
Any where we can use an object we can use a function , 

```javascript
//function can be assigned to a variable 
const add = (a,b) => a+b;
//function can be array entries
const arr = [add,1,2];
//function can be properties of other objects
const obj ={
	operation : add,
	args: arr.slice(1);
};

console.log(obj.operation(...obj.args));
//function can be declared with literals
function multiplyBy(a){
	return multiplyBy.factor*a;
}
//we can define properties for functions and access them from within the function
 multiplyBy.factor= 5;
function host(func){
return func;
}
//function can be passed into other function parameters which makes host a higher order function
const result = host(multiplyBy)(3);
console.log(result)
//so simply functions are objects with a special capability of being invokable	
```
#### Building a calculator in functional JS

```javascript
// Define 3 operations, add, multiply, substract
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;

function calculator() {
  let total = 0;

  function doOperation(operation, operand, callback) {
    total = operation(total, operand);

    if (callback) { //optional
      callback(total);
    }
    return doOperation;
  }

  return doOperation;
}

calculator()
  (add, 3)
  (multiply, 5)
  (subtract, 6, function(result) {
    console.log(result);
  });


;

```

### Using the knowledge of Closures 

```javascript

let a = 1;

const closure1 = function() {
  console.log(a);
  a = 2
}

a = 3;

const closure2 = function() {
  console.log(a);
}

closure1();//3
closure2();//2

```

### Using the knowledge of Function Arguments to create addition and multiplication functions

``` javascript
function multiplyArgs() {
  let product = 1;

  for (let i = 0; i < arguments.length; i++) {
    product *= arguments[i];
  }

  return product;
};

multiplyArgs(4, 5, 6);

//addition	
  function addArgs() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  };

  addArgs(4, 5, 6);

```
### How implicit arguments parameter is NOT exactly an array?

We cannot directly use most of the array methods like 'foreach' etc. on this it gives for example 'TypeError: arguments.forEach is not a function' error .If we need to use it as an array however we can convert it to an 
array or use 'call' method

``` javascript
function addArgs() {
  let sum = 0;

  // Instead of: arguments.arrayMethod(arg1, arg2)
  // You can do: arrayMethodRef.call(arguments, arg1, arg2)
  Array.prototype.forEach.call(arguments, arg => {
    sum += arg;
  });

  return sum;
};

addArgs(4, 5, 6);

```

### REST parameters

A modern way of approaching the above problem: using implicit arguments as an array instead of using the call trick with arguments parameter
```javascript
function addArgs(...args) {
  return args.reduce((acc, arg) => acc + arg);
};

addArgs(3, 5, 6);

```
### Functional Programming

A programming paradigm and a style of building the structure and elements of a computer programs -that treats computation as the evaluation
of mathematical functions and avoids changing state and mutable data
- this way is declarative and not imperative which is only focusing on what's happening and not How its happening

#### pure functions
functions that do not depend on data other than what is passed in and dont alter data other than what they returned making our code easier to 
reason about

### an instance where map is used

```javascript
//when updating an array 
for(let i = 0;
i < users.length;
i++){
users[i].upgraded = true;
}
//instead we use which is more of up
users.map((u) => {
u.upgraded = true;
return u;
});

//using filter

let onSale = [];
for(let i = 0;
i < p.length;
i++){
if(p[i].onSale){
onSale.push(p[i]);
}
}
products.filter((p) =>{
return p.onSale;
});
//using reduce

for(let i = 0;
i < nums.length;
i++){
sum += numbers[i];
}
nums.reduce((accumulator, n) => {
return accumulator + n
}, 0);

```

### Approaching simple problem  with Function Chaining
#### For a specific list of numbers , reduce each item by 1 and sum all numbers divisable by 3
```javascript
//Method 01
let sum = 0;
let numbers = [2, 4, 6, 10, 16]
for (let i = 0; i < numbers.length; i++){
numbers[i] = numbers[i] - 1;
if (numbers[i] % 3 === 0) {
sum += numbers[i];
}
}
// sum = 27

//Method 02
let reduced = numbers.map((n) => { return n - 1; });
let divisible = reduced.filter((n) => {
return n % 3 === 0
});
let sum = divisible.reduce((acc, n) => {
return acc + n;
}, 0);
// sum = 27

//Method 03
let sum = numbers.map((n) => { return n - 1; })
.filter((n) => { return n % 3 === 0 })
.reduce((acc, n) => { return acc + n; }, 0);

//Method 04
let sum = numbers.map(subtractOne) 
.filter(isDivisibleBy3) 
.reduce(add, 0);

```
Some libraries : 
	RamdaJs
	LodashJS

example of using Ramda

```javascript
orders = [[1.25], [5.00, 10.23], [2.00]];
R.flatten(orders);
// [1.25, 5.00, 10.23, 2.00]

//example 2
R.reject((x) => {
return x % 2 === 0;
}, [1, 2, 3, 4])
//[1,3]

//Everything shown above are declarative way of writing code and focused on WHAT and not HOW
//One final way of writing eliminating unwanted items of an array using RAMDA FUNCTION --project

let pets = [{ id: 1, name: 'Sassy', type: 'Cat' },
{ id: 2, name: 'Elmo', type: 'Cat' },
{id: 3, name: 'Chocolate Chip', type: 'Dog'}];
R.project(['name', 'type'], pets);
//[{"name": "Sassy", "type": "Cat"}, {"name": "Elmo", "type":
//"Cat"}, {"name": "Chocolate Chip", "type": "Dog"}]

	
```
# ReactJS

### What is ReactJS and How it is different ?

1) This is a library for creating Interfaces (VIEW)
2) React JS focuses on the View of the application
3) Uses Virtual DOM which is a representation of DOM in JavaScript- but React efficiently 
updates the real DOM for us

### ReactJS unlike other frameworks...

1) Component Focused ( whole application can be a main component with a bunch of sub-components)
2) One-way Data Flow Structure	-ability to manage everything through the main 
	components state. Main Component stores information of what is going on with the application and sub components and thus this 'react' to changes in that information (if something
changes in states or data then react will re-render the DOM for us automatically (STATES)
	main component also passes information with the sub component via something called props or properties .These props can pass information down to sub modules but also trigger actions
in the main module
3) JSX although we can use JS mostly we use JSX which is a combination of JS and XML 

### Let's Examine the Folder Structure

After running the command 'create-react-app #nameOfApp' it creates the sample project-which looks like,

﻿![Alt Text](https://user-images.githubusercontent.com/23515935/32826983-629e3774-ca4f-11e7-9b11-a56237d0ae39.png) 

other libraries that could be used 
  1)react-bootstrap
  2)react-router-dom  redux react-redux
	so a command installing above :

npm install react-bootstrap react-router-dom redux react-redux --save

After creating an index.js file under src we include the following:
	

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';
import Shortcut from './components/Shortcut';
import ShortcutForm from './components/ShortcutForm';
import  { setShortcut } from './actions';
import './index.css';

const store = createStore(rootReducer);
store.subscribe(()=>console.log('store',store.getState()));
store.dispatch(setShortcut({id: 0,title:'example two',cards:[]}));


ReactDOM.render(
           <Provider store ={store}>  
                <BrowserRouter>
                    <Switch> 
                        <Route exact path= "/" component={App} />
                        <Route exact path= "/Shortcut" component={Shortcut} />
                        <Route exact path="/shortcut_form" component={ShortcutForm}/>
                    </Switch>
                </BrowserRouter>
            </Provider>,
document.getElementById('root'));

```
There should be folder created 'components' inside the src folder and also a file named App.js and it could contain


```javascript
import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import ShortcutList from './ShortcutList';
import Footer from './Footer';


class App extends Component{
    render() {
        return (
            <div>
                      <h2>Mental Shortcuts</h2>
                      <hr/>
                      <ShortcutList/>
                      <hr/>
                      <div className="card">
                      <Link to ='shortcut_form'>  <h4>Create a new shortcut</h4></Link>  
                      </div>
                      <hr/>
                     <Footer/>                    
            </div>
        )
    }
}

export default App;

```

Just like App.js we have the following files in the Components folder

Card.js

```javascript
import React, {Component } from 'react';

class Card extends Component {
    state = {reveal: false};
    //constructor(){
      //  super();
       // this.state= {reveal:false};
    //}
 
    render(){
        
        const {prompt,answer} = this.props.card;
       return(
        <div className="card" onClick={()=> this.setState({reveal:true})}> 
            <div className="card-prompt" ><h4>{prompt}</h4></div>
            <div className="card-answer "><h4 className ={this.state.reveal? 'text-revealed':'text-hidden ' }   >
                {answer}
                </h4>
                </div>
        </div>)

    }
}

export default Card;

```
Shortcut.js

```javascript
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';

export class Shortcut extends Component{
    render(){
        const {title, cards} = this.props.shortcut;  
        return(
            <div>
                <Link className='link-home'to='/'>
                <h4>Go back</h4>
                </Link>
                <h3>{title}</h3>
                <br/>
                {
                    cards.map(card =>{
                        return (
                            <Card key ={card.id} card={card}/>
                        )
                    })
                }

            </div>
        )
    }
}

function mapStateToProps(state){

    return { shortcut: state.shortcut}

}
export default connect(mapStateToProps,null)(Shortcut);
```
ShortcutList.js
```javascript
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import shortcuts from '../data/shortcuts.json';
import { setShortcut ,loadShortcuts } from '../actions';

export class ShortcutList extends Component{
    componentDidMount(){
        if (this.props.shortcuts.length === 0)//to make sure that we are only loading shortcuts for once
        this.props.loadShortcuts(shortcuts);
    }
    render(){
      
        return(
            <div>   
                {
                 this.props.shortcuts.map(shortcut=>{
                     return(
                         <Link to='/shortcut'
                          key={shortcut.id} 
                          onClick={()=>this.props.setShortcut(shortcut)}>
                         <h4 >{shortcut.title} </h4>
                         </Link>
                     )
                 })                    
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        shortcuts:state.shortcuts
    };
}
export default  connect(mapStateToProps,{ setShortcut, loadShortcuts})(ShortcutList);

```
Another interesting component is a FORM component that comes next : ShortcutForm.js

```javascript
import React ,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Form, FormGroup,FormControl,ControlLabel,Button } from 'react-bootstrap';
import { addShortcut} from '../actions';


export class ShortcutForm extends Component{
    constructor(){
        super();
        this.state={
            title:'',
             cards:[]
        }
    }

addCard(){
     const {cards} = this.state;
     cards.push({id:cards.length,prompt:'',answer:''});
     this.setState({cards});
}

addShortcut(){
    // console.log('ShortcutForm state', this.st ate);  
    this.props.addShortcut(this.state);
}

    render()    {
        return (
            <div>
                <Link to='/' className='link-home'>  <h4>Home</h4></Link>
                <h4> Create a new shortcut</h4>
                <br/>
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Title: </ControlLabel>
                         {' '}
                     <FormControl onChange={event=>this.setState({
                                    title: event.target.value     
                                     })}   />
                   </FormGroup>
             {
                 this.state.cards.map( (card,index) => {
                        return(
                         <div key={card.id}>
                             <br/>
                             <FormGroup>
                                 <ControlLabel>Prompt: </ControlLabel>
                                 {' '}
                                 <FormControl onChange={ event => {
                                     const { cards } = this.state;

                                     cards[index].prompt = event.target.value;
                                     this.setState({ cards})
                                     } } />
                                 {' '}
                                 <ControlLabel> Answer: </ControlLabel>
                                 {' '}
                                 <FormControl onChange={ event => {
                                     const { cards } = this.state;

                                     cards[index].answer = event.target.value;
                                     this.setState({ cards})
                                     } } />

                             </FormGroup>

                         </div>
                     )
                 }                 
                 )
             }

                </Form>
                <br/>
                <Button onClick={()=> this.addCard()}>
                    Add Card
                </Button>
                {' '}
                <Button onClick={()=> this.addShortcut()}>
                    Save and Add Shortcut
                </Button>
            </div>
        )
    }
}

export default connect(null, { addShortcut}) (ShortcutForm);
```

Now lets add some data go to src folder create another data folder inside it and create a file named: shortcuts.json
```javascript
[
  {
    "title": "Amazing JS libraries for your next project!",
    "id": 0,
    "cards": [
      { "id": 0, "prompt": "MVC approach to create large-scale applications", "answer": "Angular" },
      { "id": 1, "prompt": "provides the model portion of MVC", "answer": "backbone" },
      { "id": 2, "prompt": " library used primarily for Document Object Model (DOM) manipulation", "answer": "JQuery" },
      { "id": 3, "prompt": " library that consists over 100 functions-These functions will help you manipulate arrays, objects and other functions.", "answer": "underscore" },
      { "id": 4, "prompt": "for graphing and visualization", "answer": "D3.js" },
      { "id": 5, "prompt": "a library for building user interfaces", "answer": "react.js" },
      { "id": 6, "prompt": "a library follows many of the same principals that Ruby on Rails has and highly opinionated, flexible, and prefers convention over configuration.", "answer": "Ember" },
      { "id": 7, "prompt": "HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web", "answer": "bootstrap" },
      { "id": 8, "prompt": "TypeScript-based open-source front-end framework which is a complete rewrite of its first version", "answer": "Angular 2" },
      { "id": 9, "prompt": "forward-thinking framework which uses a lot of newer EcmaScript features and encourages  to write your code using these new features.", "answer": "Aurelia" }
    ]
  },
  {
    "title": "Some Questions on CI/CI-tools ",
    "id": 1,
    "cards": [
      { "id": 0, "prompt": "helps to automate the non-human part of software development process, with continuous integration and facilitating technical aspects of continuous delivery", "answer": "Jenkins" },
      { "id": 1, "prompt": " development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.", "answer": "Continous Integration (CI)" },
      { "id": 2, "prompt": "one Metaphorical way of thinking about jobs and builds in jenkins", "answer": "ice cube tray vs ice cubes-> ice blocks -are builds and the tray can be compared to the job which creates builds " },
      { "id": 3, "prompt": "difference between CI and continous delivery", "answer": "Continuous Delivery is described as the logical evolution of continuous integration: Always be able to put a product into production! ... By employing good work item definitions, effective automated testing, and continuous integration a team can be in a position to automate the codebase's delivery to any given environment." },
      { "id": 4, "prompt": "Another tool to implement Continous integration", "answer": "Travis CI" },
      { "id": 5, "prompt": "best way to create a repository in heroku", "answer": "run command 'heroku create" },
      { "id": 6, "prompt": "New term for build trigger -build when a change is pushed to github( in jenkins )", "answer": "GitHub hook trigger for GITScm polling." }
    ]
  }
]
```

Now just have a look at the shortcutList.js file and there you will see the use of map function to 
iterate through the shortcut list of objects
Also notice the 'import ShortcutList from './ShortcutList';' in the App.js file and the JSX tag of <ShortcutList/> this is basically
how we render components 

### Routing 

Notice the way of routing:

index.js has imported all the components it requires and also especially 'import { BrowserRouter, Switch, Route } from 'react-router-dom';'
 using the following syntax;
```javascript
 <Route exact path= "/" component={App} />
                        <Route exact path= "/Shortcut" component={Shortcut} />
                        <Route exact path="/shortcut_form" component={ShortcutForm}/>
```

note also how routing is done by using LINK: have a look at the shortcut.js file and the line importing it and JSX syntax of  using it

```javascript
	import {Link} from 'react-router-dom';
		.....
	 <Link className='link-home'to='/'>
                <h4>Go back</h4>
                </Link>
// have a look at how the shortcutList.js has the same kind of code
			....
```
### Redux and other related concepts

![Alt Text](https://user-images.githubusercontent.com/23515935/32856259-2ab3f100-caa9-11e7-9cfe-9cf9f6567a88.png)

![Alt Text](https://user-images.githubusercontent.com/23515935/32856314-5307da22-caa9-11e7-9d92-2e0e2dcc11f2.png)

All of the data found in STORE! 
we need one reducer to set up a store , they responds to messages call ACTIONS that we send through
our application to pass data into the STORE
Thus a REDUCER is dependant on atleast one action being within our application 

so we create actions folder  and add index.js in it 

//we actually call this 'action creator'
```
function setShortcut(shortcut){
const action ={
	type:'SET_SHORTCUT',
	shortcut:shortcut                        
  //this data can come from any component that can decide how to set the shortcut
};
return action;
}
```
 
we can modify the above code as shown below:
```javascript
export function setShortcut(shortcut){
	return{
		type:'SET_SHORTCUT',
		shortcut:shortcut
};
}
```


writing a reducer which will handle the setShortcut function 

accompanying reducer for the above function:
to start this off we create a reducer folder to represent redux reducers and create a index.js file
as it is default, it composes an object that represents how it should update the state
* each reducer in redux takes 2 parameters (1st parameter represents the incoming and the present state of redux , so 
* second parameter we handle an incoming action , this will be action created by action creator always be an object with a type with some relavant data , Reducer will also have to know how to switch between different types of actions in order to update the  store in a different way , so we will use SWITCH statements 

```javascript
function shortcut(state={},action){
	switch (action.type)
	{
		case "SET_STACK":
			return action.shortcut;	
		default:
			return state;		

	}
}
```
After minor improvements and with additional Cases like "SET_STACK" the final versions of the two files will be as follows:

##### reducers/index.js

```javascript
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
```

##### actions/index.js


```javascript
export const SET_SHORTCUT ='SET_SHORTCUT';
export const LOAD_SHORTCUTS = 'LOAD_SHORTCUTS';
export const ADD_SHORTCUT = 'ADD_SHORTCUT';

export function setShortcut(shortcut){
  return {
      type: SET_SHORTCUT,
      shortcut:shortcut 
  };
} 

export function loadShortcuts(shortcuts){
  return{
    type: LOAD_SHORTCUTS,
    shortcuts

  }
}

export function addShortcut(shortcut){
  return{
    type:ADD_SHORTCUT,
    shortcut
  }

}
```

#### Setting up the store in root index.js file

As shown in the above root index.js file code , note the two following 2 lines of imports
```import { createStore } from 'redux'
import rootReducer from './reducers'
```

and also ```'const store = createStore(rootReducer);'```

Afterwards note how the Provider Component from react-redux module ,so just like the Browser Router 
Provider will wrap around the rendering component to provide the Store ,look how we have wrapped using a pair of Provider
tags 

```javascript
<Provider store ={store}>  
                <BrowserRouter>
                   ----
                </BrowserRouter>
            </Provider>,
```

#### Dispatching (SENDING) setshortcut action creator when ever we click on a link of a shortcut
Note the import of setStack etc.. components from the actions folder

Connecting the shortcutlist component to redux so that it has access to the store and can actually send some actions 

so note how we imported a connect component from the react-redux module
 ShortcutList component is made aware of the State of the component by the connect function -without it, (IE: export default
	ShortcutList) this will be a default dumb component -no knowledge of the state!
```javascript

function mapStateToProps(state){
    return{
        shortcuts:state.shortcuts
    };
}
export default  connect(mapStateToProps,{ setShortcut, loadShortcuts})(ShortcutList);

```

Similarly we implement the mapStateToProps in the Shortcut.js file and iterate through the shortcuts using the map function

### Testing with Jest and Enzyme

1) installing as dev dependencies so that it will not be available on the production app but only on dev app
	npm install react-test-renderer enzyme --save-dev
2) Testing App.js file : create a App.test.js file in the components folder ; so when we run npm test it will run the tests
3) Lets write tests on app.test.js file

		

### Error :  when trying to mount in app.test.js 

Invariant Violation: Could not find "store" in either the context or props of "Connect(ShortcutList)". Either wrap the root component in a , or explicitly pass "store" as a prop to "Connect(ShortcutList)".

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

 


### rendering a Connected Redux Component: ShortcutList

```javascript
   
	 it ('renders the ShortcutList',()=>{
	//console.log(app.debug()); will give the actual structure of the JSX
        expect(app.find('Connect(ShortcutList)').exists()).toBe(true);
   	 });
	//notice the use of exists and toBe
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

And the it blocks are the same as we did in the app.js.test file and looks as below:
```javascript
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

```

And also note how the fixtures file has been used to simulate the props of the above file!
Similarly the shortcutList .js file is tested 

```javascript
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
As in the above example note how the button components are tested by giving 'at(1) and at(0)' so on

```javascript

  <Button onClick={()=> this.addCard()}>
                    Add Card
                </Button>
                {' '}
                <Button onClick={()=> this.addShortcut()}>
                    Save and Add Shortcut
                </Button>

//can be tested by the following code


 it ('renders a button to add a new card',()=>{
        expect(shortcutForm.find('Button').at(0).props().children).toEqual('Add Card');   
    });
    it('renders a button to submit the form',()=>{
        expect(shortcutForm.find('Button').at(1).props().children).toEqual('Save and Add Shortcut')
    })
```
### Running Simulations for testing behavior on Form Components using Enzyme

Enzyme allows to mimic  user behavior using different events and simulate functions

Lets test Changing Title bahavior


```javascript

<FormControl onChange={event=>this.setState({
                                    title: event.target.value     
                                     })}   />
                   </FormGroup>

//Above could be tested as follows;

 describe('and updating the title',()=>{
        beforeEach(()=>{
              shortcutForm.find('FormControl').simulate('change',{target:{ value :changeTitle} })

        });

        it('updates the title in state',()=>{
          //  console.log(shortcutForm.state());
            expect(shortcutForm.state().title).toEqual(changeTitle);
        })
    });

```


Lets test Adding a new card

```javascript
addCard(){
     const {cards} = this.state;
     cards.push({id:cards.length,prompt:'',answer:''});
     this.setState({cards});
}

<Button onClick={()=> this.addCard()}>
Add Card
</Button>
//above is in the form now lets see what is in the test 

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
....
```

#### why are we using after each?
After each is used to reset the changes done , to the Component After each of the tests -this is a way of proper cleanup
So the final shortcutForm.test.js would look like
```javascript
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
    })```






### Testing the action creators/ actions and Reducers

These are all pure functions -which gives a unique output for a particular input so just having a look at the Functions
would explain it s purpose:

#### actions/index.test.js








```javascript
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

```
### reducers/index.test.js
```javascript
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

```

### Enzyme rendering ..

```javascript
//Shallow Rendering

import { shallow } from 'enzyme';

const wrapper = shallow(<MyComponent />);
// ...
//Full Rendering

import { mount } from 'enzyme';

const wrapper = mount(<MyComponent />);
// ...
//Static Rendering

import { render } from 'enzyme';

const wrapper = render(<MyComponent />);

```

### common JEST Methods 

afterEach..
beforeEach..
describe..
it..
test..

### TEST COVERAGE

command :
npm run test -- --coverage

The coverage would not 100% in the src/index.js file because of the
![Alt Text](https://user-images.githubusercontent.com/23515935/32871374-86af12fa-cae5-11e7-99d8-32b82ca50e63.png)

### Jenkins on Windows and Linux

1) Commands basically starts with bat 'git ....' in windows 
2) Commands starts with sh 'git ...' for linux
3) Some errors can be easily avoided by using Linux instead of windows
	example: https://stackoverflow.com/questions/46986695/npm-test-does-not-detect-new-test-file-changes-in-jenkins

### Basic Jenkins Settings

1) Check if the correct build trigger is selected (eg: schedule * * * * *)
2) Definition under Pipeline should be Pipeline Script from SCM
3) Script Path should be 'Jenkinsfile'


simple example
```javascript
stage 'Building'
node {
    checkout scm
    sh 'npm install'   
}

stage 'Testing'

node {
sh 'npm test -- --coverage'
notify("Deploy to staging?")
input 'Deploy to staging?'
}


stage name: 'Deploy to staging', concurrency: 1
node {
    //sh 'git https://github.com/NaveenDK/mentalshortcuts.git'
   // sh 'npm install'''
    git branch: 'master', 
        url:  'https://github.com/NaveenDK/mentalshortcuts.git'
        sh 'npm install'
        sh 'npm run-script build'
        notify 'Mental_shortcuts version 02 test webhook Deployed successfully!'
    
}

def notify(status){
    emailext (
      to: "naveenkolambage@gmail.com",
      subject: "${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
      body: """<p>${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
        <p>Check console output at <a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a></p>""",
    )
}

```

![Alt Text](https://user-images.githubusercontent.com/23515935/32871991-23dd70a0-cae9-11e7-9d2d-f9d031869ad1.png)



