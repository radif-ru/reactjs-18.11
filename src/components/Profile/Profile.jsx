import './Profile.scss'

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Profile extends Component {
  render() {
    return (
      <div className='profile'>
        <Link to='/'>
          Профайл пуст! Открыть мессенджер
        </Link>
      </div>
    )
  }
}