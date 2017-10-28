import React,{ Component } from 'react';
import { Link } from 'react-router-dom';    
import ShortcutList from './ShortcutList';

class App extends Component{
    render() {
        return (
            <div>
improve-loading-shortcuts
                      <h2>Now componentdid mount we will work on the newest branch itself !</h2>


                    
    

                      <hr/>
                      <ShortcutList/>
                      <hr/>
                      <Link to='stack_form'><h4>Create a new Shortcut</h4></Link>

            </div>
        )
    }
}

export default App;
