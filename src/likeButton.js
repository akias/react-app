import React, { Component, Fragment } from 'react'
import './index.css'
import axios from 'axios';

class LikeButton extends Component {
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
      return <li key={ticket.id}>{ticket.identifier}</li>;
    });

    return (
      <Fragment>
        <div className="app">
        <h1 className="app-title">ticket</h1>
        <div>
          <ul>
            {tickets}
          </ul>
        </div>
      </div>
      </Fragment>
    );
  }
}


export default LikeButton;
