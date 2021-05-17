import './Header.scss'

import React, {Component} from 'react';
import PropTypes from 'prop-types'

export const chatType =  {
  id: PropTypes.number,
  messages: PropTypes.array,
  name: PropTypes.string.isRequired
};

export class Header extends Component {
  static propTypes = chatType

  static defaultProps = {
    name: 'Header'
}

  render() {
    const {id, messages, name} = this.props;

    return (
      <div className='header'>
        {name}
      </div>
    );
  }
}