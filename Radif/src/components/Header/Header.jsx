import './Header.scss'

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

export const chatType =  {
  chats: PropTypes.array,
  // id: PropTypes.number,
  // messages: PropTypes.array,
  // name: PropTypes.string.isRequired
};

export class Header extends PureComponent {
  static propTypes = chatType
  render() {
    const { chats } = this.props;

    return (
      <header className='header'>
        <span className='header-name'>Список чатов:</span>
        {
          chats && chats.length && <div className='header-elements'>
            {chats.map((chat, idx) => <span key={idx}>{chat.name}; </span>)}
          </div>
        }
      </header>
    );
  }
}

// import './Header.scss'
//
// import React, {Component} from 'react';
// import PropTypes from 'prop-types'
//
// export const chatType =  {
//   id: PropTypes.number,
//   messages: PropTypes.array,
//   name: PropTypes.string.isRequired
// };
//
// export class Header extends Component {
//   static propTypes = chatType
//
//   static defaultProps = {
//     name: 'Header'
// }
//
//   render() {
//     const {name} = this.props;  // Теперь данный элемент не передаётся
//
//     return (
//       <div className='header'>
//         {name}
//       </div>
//     );
//   }
// }