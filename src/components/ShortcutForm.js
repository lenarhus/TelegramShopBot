import React ,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Form, FormGroup,FormControl,ControlLabel,Button } from 'react-bootstrap';
import { addShortcut} from '../actions';


export class ShortcutForm extends Component{
    constructor(){
        super();
        this.state={
            title:'',
             cards:[]
        }
    }

addCard(){
     const {cards} = this.state;
     cards.push({id:cards.length,prompt:'',answer:''});
     this.setState({cards});
}

addShortcut(){
    // console.log('ShortcutForm state', this.state);  
    this.props.addShortcut(this.state);
}

    render()    {
        return (
            <div>
                <Link to='/' className='link-home'>  <h4>Home</h4></Link>
                <h4> Create a new shortcut</h4>
                <br/>
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Title: </ControlLabel>
                         {' '}
                     <FormControl onChange={event=>this.setState({
                                    title: event.target.value     
                                     })}   />
                   </FormGroup>
             {
                 this.state.cards.map( (card,index) => {
                        return(
                         <div key={card.id}>
                             <br/>
                             <FormGroup>
                                 <ControlLabel>Prompt: </ControlLabel>
                                 {' '}
                                 <FormControl onChange={ event => {
                                     const { cards } = this.state;

                                     cards[index].prompt = event.target.value;
                                     this.setState({ cards})
                                     } } />
                                 {' '}
                                 <ControlLabel> Answer: </ControlLabel>
                                 {' '}
                                 <FormControl onChange={ event => {
                                     const { cards } = this.state;
//i have decided not to add a helper function to pass parameter inplace of answer and prompt but if we needed we could add it 

                                     cards[index].answer = event.target.value;
                                     this.setState({ cards})
                                     } } />

                             </FormGroup>

                         </div>
                     )
                 }                 
                 )
             }

                </Form>
                <br/>
                <Button onClick={()=> this.addCard()}>
                    Add Card
                </Button>
                {' '}
                <Button onClick={()=> this.addShortcut()}>
                    Save and Add Shortcut
                </Button>
            </div>
        )
    }
}

export default connect(null, { addShortcut}) (ShortcutForm);
  