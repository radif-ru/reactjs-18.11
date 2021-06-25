import './Messenger.css';

import React, {Component, PureComponent} from 'react';
import {Link} from 'react-router-dom';

import {MessagesList} from 'components/MessagesList';
import {MessageForm} from 'components/MessageForm';
import {Header} from 'components/Header';
import {ChatList} from 'components/ChatList';

export class Messenger extends Component {
  // componentDidUpdate() {
  //   if (this.messages.length) {
  //     const {author} = this.messages[this.messages.length - 1];
  //     if (author !== 'Bot') {
  //       setTimeout(() => {
  //         this.handleMessageSend({
  //           text: `Привет, ${author}! Бот на связи!`,
  //           author: 'Bot'
  //         });
  //       }, 1000);
  //     }
  //   }
  // }

  render() {
    const {chats, messages, sendMessage} = this.props;

    return (
      <div className="messenger">
        {/*<Header {...this.chat}/>*/}
        <Header/>
        <ChatList chats={chats}/>
        {messages ? <MessagesList items={messages}/>
          : 'Пожалуйста, выберите чат, чтобы продолжить общение'}
        {messages && <MessageForm onSend={sendMessage}/>}
        <Link to="/profile" style={{
          width: '100%',
          textDecoration: 'none',
          alignItems: 'center',
          textAlign: 'center',
          padding: '15px',
          fontSize: '25px',
          color: 'goldenrod'
        }}>
          Profile
        </Link>
      </div>
    )
  }
}
