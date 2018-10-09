import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    state = {
      color: this.props.color
    }
  }
  
  render() {
    return (
      <div onClick={} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
