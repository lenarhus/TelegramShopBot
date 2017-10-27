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
                        <Route exact path="/stack_form" component={ShortcutForm}/>
                    </Switch>
                </BrowserRouter>
            </Provider>,
document.getElementById('root'));