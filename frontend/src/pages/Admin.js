import React, { Component } from 'react'
import UserList from '../components/UserList';

/*
*   Bütün kullanıcıları görüntüleyen UserList component ine sahiptir.
*
*/
export default class Admin extends Component {

  render() {
    return (
      <div className="container">
        <UserList />
      </div>
    )
  }
}
