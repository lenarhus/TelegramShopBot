import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import ShortcutList from './ShortcutList';
import Footer from './Footer';
import { Button } from 'react-bootstrap';


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
