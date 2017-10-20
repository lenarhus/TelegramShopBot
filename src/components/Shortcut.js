import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class Shortcut extends Component{
    render(){
        return(
            <div>
                <Link to='/'>Go back</Link>
                <h3>export from shortcut</h3>
            </div>
        )
    }
}

export default Shortcut;