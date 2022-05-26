import React, { Component } from 'react'
import UserList from '../components/UserList';

export default class Admin extends Component {

  render() {
    return (
      <div className="container">
        <UserList />
      </div>
    )
  }
}
