import React, { Component } from 'react';
import {Button } from 'react-bootstrap';


class camButton extends React.Component{
    handleClickCamera(){
        window.postMessage("camera!");

    }
    handleClickGallery(){
        window.postMessage("gallery!");

    }

    render(){
        return(
            <div>
            <Button onClick={(e)=>
            this.handleClickCamera(e)}>
               Open Camera
            </Button>
            <Button onClick={(e)=>
            this.handleClickGallery(e)}>
                Open Gallery
            </Button>
            </div>
        )
    }
}
export default camButton;