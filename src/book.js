import React, { Component, Fragment } from 'react'
import axios from 'axios';
import ReactSwipe from 'react-swipe';
import Ticket from './ticket'

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      book_title: ''
    };
  }

  componentWillMount() {
    const request = axios.create({
      baseURL: 'http://localhost:2300'
    })

    request.get(`/books/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          tickets: res.data.tickets,
          book_title: res.data.book.title
        });
      })
      .catch(() => {
        this.props.history.push('/error')
      });
  }

  render() {
    return (
      <div>
        <ReactSwipe className="carousel" swipeOptions={{continuous:false,auto:3000}} key={this.state.tickets.length}>
          {this.state.tickets.map((ticket) => 
          <div>
            <div key={ticket.id}>{this.state.book_title}</div>
            <Ticket ticket= {ticket} />
          </div>
          )}
        </ReactSwipe>
      </div> 
    );
  }
}

export default Book;
