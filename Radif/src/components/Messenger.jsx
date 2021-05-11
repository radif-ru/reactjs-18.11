import React, {Component} from 'react';

import {MessagesList} from './MessagesList';
import {MessageForm} from './MessageForm';

// const messages = ['Привет!', 'Как дела?', 'Как настроение?', 'Как погода?'];

export class Messenger extends Component {
  state = {
    messages: [
      {text: 'Привет всем!', author: 'Radif'}
    ],
  };

  interval = null;

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   const randIndex = Math.floor(Math.random() * messages.length);
    //
    //   this.setState({
    //     messages: this.state.messages.concat([{
    //       text: messages[randIndex],
    //       author: 'Dmitry'
    //     }]),
    //   });
    // }, 5000);
  }

  componentDidUpdate() {
    const mess = this.state.messages[this.state.messages.length - 1]
    if (mess.author !== 'Bot') {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([{
            text: `Привет ${mess.author}! Бот на связи!`,
            author: 'Bot'
          }]),
        });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleMessageSend = (message) => {
    this.setState({
      messages: this.state.messages.concat([{
        text: message.text,
        author: message.author
      }]),
    });
  }

  render() {
    const {messages} = this.state;

    return (
      <div>
        <ul>
          {messages.map((message, idx) => <li
            key={idx}>{message.author}: {message.text}</li>)}
        </ul>
        <MessageForm onSend={this.handleMessageSend}/>
      </div>
    )
  }
}