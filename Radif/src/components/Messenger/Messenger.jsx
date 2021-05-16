import './Messenger.css';

import React, { Component } from 'react';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';

export class Messenger extends Component {
  state = {
    messages: [],
  };

  componentDidUpdate() {
    const { author } = this.state.messages[this.state.messages.length - 1];
    if (author !== 'Bot') {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([{ text: `Привет, ${author}! Бот на связи!`, author: 'Bot' }]),
        });
      }, 1000);
    }
  }

  handleMessageSend = (message) => {
    this.setState(({ messages }) => ({ messages: messages.concat([message]) }));
  }

  render() {
    const { messages } = this.state;

    return (
      <div className="messanger">
        <MessagesList items={messages} />
        <MessageForm onSend={this.handleMessageSend} />
      </div>
    )
  }
}
