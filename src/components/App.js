    import React,{ Component } from 'react';
import ShortcutList from './ShortcutList';

class App extends Component{
    render() {
        return (
            <div>
                      <h2>Now componentdid mount we will work on master itself !</h2>
                      <hr/>
                      <ShortcutList/>
            </div>
        )
    }
}

export default App;