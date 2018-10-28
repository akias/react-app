import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const FRIENDS = [
  {
    id: 'serval',
    nameJa: 'サーバル',
    nameEn: 'Serval Cat',
    family: 'ネコ目ネコ科ネコ属'
  },
  {
    id: 'raccoon',
    nameJa: 'アライグマ',
    nameEn: 'Common raccoon',
    family: 'ネコ目アライグマ科アライグマ属'
  },
  {
    id: 'fennec',
    nameJa: 'フェネック',
    nameEn: 'Fennec',
    family: 'ネコ目イヌ科キツネ属'
  }
]

const friendById = id => FRIENDS.find(friend => friend.id === id)

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/friends">Friends</Link></li>
      </ul>

      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/friends' component={Friends} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
)

const Friends = () => (
  <div>
    <h2>Friends</h2>
    <Route exact path='/friends' component={FriendList} />
    <Route path='/friends/:id' component={Friend} />
    {/* <p>ここにフレンズのリストを書きます</p> */}
  </div>
)

const Friend = props => {
  const { id } = props.match.params
  const friend = friendById(id)

  if (typeof friend === 'undefined')  {
    return (
      <div>
        <p>Friends with id '{id}' does not exist.</p>
      </div>
    )
  }
  const containerStyle = { border: '1px gray solid', display: 'inline-block', padding: 10 }
  const contentsStyle = { margin: 0 }

  return (
    <div>
      <div style={containerStyle}>
        <p style={contentsStyle}>{friend.family}</p>
        <h1 style={contentsStyle}>{friend.nameJa}</h1>
        <p style={contentsStyle}>{friend.nameEn}</p>
      </div>
    </div>
  )
}

const FriendList = () => (
  <div>
    {FRIENDS.map(friend => (
      <li key={friend.id}>
        <Link to={`/friends/${friend.id}`}>{friend.nameJa}</Link>
      </li>
    ))}
  </div>
)

export default App
