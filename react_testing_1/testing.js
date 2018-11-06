import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

const styles = {
    root:{
      flexGrow: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    }
}

var customStyle = {
    test:{
      color:'#f00'
    }
}

var clock = '....';
var datetime;

class DigitalClock extends React.Component 
{
  state={}
  customStyle = {
    test:{
      color:'#f00'
    }
  }
  getFullTime(){
    var d = Date.now();
    var datetime = new Date(d);
    datetime = datetime.toLocaleString('en-US', 
    { 
      hour: 'numeric',
      minute: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true 
    });
    return datetime;
  }
  componentDidMount()
  {
    setInterval(()=>{
      clock = this.getFullTime();
      customStyle.test.color = 'green'; // creates error
      this.setState({})
    }, 1000);
  }
  render()
  {
    return ( <div style={styles.root}>
              <h1>Time is &nbsp;</h1>
              <h1 style={customStyle.test}>{clock}</h1>
             </div>                       
    );  
  }
  
}


export default DigitalClock;
