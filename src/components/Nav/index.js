import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Nav/Nav.css'
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import UserComponent from '../UserComponent/UserComponent';

export default class Top extends Component {
  render() {
    return (
      <div>
        <div className='head align-items-center d-flex fixed-top justify-content-lg-between mLeftRight'>
          <Logo className='Logo-style' />
          <UserComponent/>
        </div>
      </div>
    )
  }
}
