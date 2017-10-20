import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Shortcut from './components/Shortcut';

ReactDOM.render(<BrowserRouter>
                    <Switch> 
                        <Route exact path= "/" component={App} />
                        <Route exact path= "/Shortcut" component={Shortcut} />
                    </Switch>
                </BrowserRouter>,
document.getElementById('root'));