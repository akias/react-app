import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LikeButton extends Component {
  constructor () {
    super()
    this.state = { isLiked: false }
    // this.state = { count: 0, isLiked: false }
  }

  handleClickOnLikeButton () {
    this.setState((prevState) => {
      return { count: prevState.count + 1, isLiked: !this.state.isLiked }
    })
    // console.log(this.state.isLiked)
    // console.log(this.state.count)
    // this.setState((prevState) => {
    //   return { count: prevState.count + 1, isLiked: !prevState.state }
    // })
    // console.log(this.state.isLiked)
    // console.log(this.state.count)
  }

  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? '取消' : '点赞'} 👍 
      </button>
    )
  }
}

export default LikeButton;
