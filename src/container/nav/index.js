import React, { Component } from 'react'
import NavPage from './navPage'

export default class Nav extends Component {
  render () {
    return <NavPage {...this.props}/>
  }
}
