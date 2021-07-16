import './Messenger.css';

import React, {Fragment, PureComponent} from 'react';
import {Link} from 'react-router-dom';

import {MessagesList} from 'components/MessagesList';
import {MessageForm} from 'components/MessageForm';
// import {Header} from 'components/Header';
import {ChatList} from 'components/ChatList';
import {HeaderRedux} from 'containers/HeaderContainer';


export class Messenger extends PureComponent {
  render() {
    const {chats, messages, sendMessage, addChat, removeChat} = this.props;

    return (
      <Fragment>
        <HeaderRedux/>
        <div className="messenger">
          {/*<Header {...this.chat}/>*/}
          <ChatList chats={chats} addChat={addChat} removeChat={removeChat}/>
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
      </Fragment>
    )
  }
}
