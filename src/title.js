import React, { Component } from 'react';

class Title extends Component {
  handleClickOnTitle () {
    console.log('Click on title.')
  }

  render () {
    return (
      <h1 onClick={this.handleClickOnTitle}>React new app</h1>
    )
  }
}

export default Title;