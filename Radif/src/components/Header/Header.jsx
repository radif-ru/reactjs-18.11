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
        Hi from header!
        {
          chats && chats.length && <ul>
            {chats.map((chat, idx) => <li key={idx}>{chat.name}</li>)}
          </ul>
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