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
    console.log(this.props.match.params.id);
    const request = axios.create({
      baseURL: 'http://localhost:2300'
    })
    //console.log(this.props.params)
    request.get(`/books/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          tickets: res.data.tickets
        });
      })
      .catch(() => {
        console.log('book is not found');
      });
  }

  componentDidMount() {
    console.log("打印props");
    console.log(this.props.match);
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
