    import React,{ Component } from 'react';
import ShortcutList from './ShortcutList';

class App extends Component{
    render() {
        return (
            <div>
                      <h2>This title should be shown in the deployed app when you push the code to your github repo-A new Pull Request!</h2>
                      <hr/>
                      <ShortcutList/>
            </div>
        )
    }
}

export default App;
