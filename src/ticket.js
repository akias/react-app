import React, { Component } from 'react';

class Ticket extends Component {
  render () {
    const { ticket } = this.props
    return (
      <div>
        <div>title：{ticket.identifier}</div>
        <hr />
      </div>
    )
  }
}

export default Ticket;