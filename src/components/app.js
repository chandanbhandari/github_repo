import React, { Component } from 'react';
import Header from "../containers/header";
import UserList from '../containers/user_list'

export default class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <UserList/>
      </div>
    );
  }
}
