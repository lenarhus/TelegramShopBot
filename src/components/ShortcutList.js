import React,{ Component } from 'react';
import shortcuts from '../data/shortcuts.json'
class ShortcutList extends Component{
    render(){
        return(
            <div>
                {
                 shortcuts.map(shortcut=>{
                     return(
                         <h4 key={shortcut.id}>{shortcut.title} </h4>
                     )
                 })                    
                }
            </div>
        )
    }
}

export default  ShortcutList;