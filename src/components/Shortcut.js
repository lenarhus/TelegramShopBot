import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';

class Shortcut extends Component{
    render(){
        const {title, cards} =this.props.shortcut;
        return(
            <div>
                <Link className='link-home'to='/'>
                <h4>Go back</h4>
                </Link>
                <h3>{title}</h3>
                <br/>
                {
                    cards.map(card =>{
                        return (
                            <Card key ={card.id} card={card}/>
                        )
                    })
                }

            </div>
        )
    }
}

function mapStateToProps(state){

    return { shortcut: state.shortcut}

}

export default connect(mapStateToProps,null)(Shortcut);