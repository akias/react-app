import React, { Component, Fragment } from 'react'
import axios from 'axios';
import ReactSwipe from 'react-swipe';
import ReactDOM from 'react-dom';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: []
    };
  }

  componentWillMount() {
    const request = axios.create({
      baseURL: 'http://localhost:2300'
    })
    request.get(`/books/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          tickets: res.data.tickets
        });
      })
      .catch(() => {
        this.props.history.push('/error')
      });
  }

  render() {
    const tickets = this.state.tickets.map(ticket => {
      return <div>{ticket.identifier}</div>;
    });

    return (
      <ReactSwipe className="carousel" swipeOptions={{continuous:false,auto:3000}} key={this.state.tickets.length}>
          {this.state.tickets.map((ticket) => 
            <div key={ticket.id}>
              {ticket.identifier}
            </div>
          )}
      </ReactSwipe>
    );
  }
}


export default LikeButton;
