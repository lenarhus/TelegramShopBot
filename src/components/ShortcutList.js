import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import shortcuts from '../data/shortcuts.json';
import { setShortcut } from '../actions';

class ShortcutList extends Component{
    render(){
        console.log('shortcutlist props',this.props);
        return(
            <div>   
                {
                 shortcuts.map(shortcut=>{
                     return(
                         <Link to='/shortcut'
                          key={shortcut.id} 
                          onClick={()=>this.props.setShortcut(shortcut)}>
                         <h4 >{shortcut.title} </h4>
                         </Link>
                     )
                 })                    
                }
            </div>
        )
    }
}


export default  connect(null,{ setShortcut})(ShortcutList);