import './Messenger.css';

import React, {Component} from 'react';

import {MessagesList} from 'components/MessagesList';
import {MessageForm} from 'components/MessageForm';
import {Header} from 'components/Header';
import {ChatList} from 'components/ChatList';
import {Link} from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

export class Messenger extends Component {
  state = {
    chats: {
      '1': {
        id: 1,
        messages: [
          {text: 'Привет! Это чат №1', author: 'Bot'},
        ],
        name: 'Chat 1',
      },
      '2': {
        id: 2,
        messages: [
          {text: 'Привет! Это чат №2', author: 'Bot'},
        ],
        name: 'Chat 2',
      },
      '3': {
        id: 3,
        messages: [
          {text: 'Привет! Это чат №3', author: 'Bot'},
        ],
        name: 'Chat 3',
      }
    },
  };

  componentDidUpdate() {
    if (this.messages.length) {
      const {author} = this.messages[this.messages.length - 1];
      if (author !== 'Bot') {
        setTimeout(() => {
          this.handleMessageSend({
            text: `Привет, ${author}! Бот на связи!`,
            author: 'Bot'
          });
        }, 1000);
      }
    }
  }

  handleMessageSend = (message) => {
    const {chats} = this.state;
    const {match} = this.props;

    const chat = chats[match.params.id];
    const messages = this.messages.concat([message]);
    chat.messages = messages;

    this.setState({
      chats: {
        ...this.state.chats,
        [match.params.id]: chat,
      }
    });
  }

  get messages() {
    const {chats} = this.state;
    const {match} = this.props;

    let messages = null;

    if (match && chats[match.params.id]) {
      messages = chats[match.params.id].messages;
    }

    return messages;
  }

  get chat() {
    const {chats} = this.state;
    const {match} = this.props;

    let chat = null;

    if (match && chats) {
      chat = chats[match.params.id];
    }

    return chat;
  }

  render() {
    return (
      <div className="messenger">
        <Header {...this.chat}/>
        <ChatList/>
        {this.messages ? <MessagesList
            items={this.messages}/> :
          <div className="messages-list">
            Пожалуйста, выберите чат, чтобы продолжить общение
          </div>}
        {this.messages && <MessageForm onSend={this.handleMessageSend}/>}
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
