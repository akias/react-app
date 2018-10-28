import React, { Component } from 'react'
import './index.css'
import axios from 'axios';

const GEOCODE_ENDPOINT = 'http://localhost:2300/books/1';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // place: '通天閣', //ここに好きな場所を指定。
    };
  }
  handleGetLatAndLng() {
    // Google Maps APIが指定した必須パラメータ(この場合はaddress)をparamsに渡す。
    axios
      .get(GEOCODE_ENDPOINT)
      .then((results) => {
      // 以下のGoogle API のレスポンスの例を元に欲しいデータを取得
        console.log(results.data)
        console.log(results.data.tickets[0])
        console.log(results.data.tickets[1])
        const data = results.data;
        const ticket_1 = data.tickets[0];
        const ticket_2 = data.tickets[1];
        this.setState({
          ticket_1: ticket_1.identifier,
          ticket_2: ticket_2.identifier
        });
      },
      )
      .catch(() => {
        console.log('通信に失敗しました。');
      });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app-title">緯度軽度検索</h1>
        <p> ticket_1: {this.state.ticket_1} </p>
        <p> ticket_2: {this.state.ticket_2}</p>
        <input
          type="button"
          value="経度・緯度を検索"
          onClick={() => this.handleGetLatAndLng()}
        />
      </div>
    );
  }
}


export default LikeButton;
