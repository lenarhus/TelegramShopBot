import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import ShortcutList from './ShortcutList';








class App extends Component{
    render() {
        return (
            <div>
  
                      <h2>Mental Shortcuts</h2>
                      <hr/>
                      <ShortcutList/>
                      <hr/>
                      <Link to ='shortcut_form'>  <h4>Create a new shortcut</h4></Link>  
                      <hr/>
                      <hr/>
                    
                     
                    
            </div>
        )
    }
}

export default App;
