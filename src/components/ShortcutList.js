import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import shortcuts from '../data/shortcuts.json';
import { setShortcut ,loadShortcuts } from '../actions';

class ShortcutList extends Component{
    componentDidMount(){
        if (this.props.shortcuts.length === 0)//to make sure that we are only loading stacks for once
        this.props.loadShortcuts(shortcuts);
    }


    render(){
      
        return(
            <div>   
                {
                 this.props.shortcuts.map(shortcut=>{
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

function mapStateToProps(state){
    return{
        shortcuts:state.shortcuts
    };
}
export default  connect(mapStateToProps,{ setShortcut, loadShortcuts})(ShortcutList);