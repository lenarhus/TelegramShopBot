import React, { Component } from 'react';
import {Button } from 'react-bootstrap';


class camButton extends React.Component{
    handleClick(){
        window.postMessage("hello world!");

    }

    render(){
        return(
            <Button onClick={(e)=>
            this.handleClik(e)}>
            Camera
            </Button>
        )
    }
}
export default camButton;