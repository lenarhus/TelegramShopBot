import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView,
  TouchableHighlight,
  Button
} from 'react-native';


class camButton extends React.Component{
    handleClick(){
        window.postMessage("hello world!");

    }

    render(){
        return(
            <Button onPress={(e)=>
            this.handleClik(e)}>
            Camera
            </Button>
        )
    }
}
export default camButton;