import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import shortcuts from '../data/shortcuts.json';

class ShortcutList extends Component{
    render(){
        return(
            <div>
                {
                 shortcuts.map(shortcut=>{
                     return(
                         <Link to='/shortcut'>
                         <h4 key={shortcut.id}>{shortcut.title} </h4>
                         </Link>
                     )
                 })                    
                }
            </div>
        )
    }
}

export default  ShortcutList;