import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component {
  state = {
    author: '',
    text: '',
  };

  static propTypes = {
    onSend: PropTypes.func,
  }

  handleMessageSend = () => {
    const { onSend } = this.props;

    if (typeof onSend === 'function') {
      onSend(this.state);

      this.setState({ text: '' });
    }
  }

  handleInputChange = (event) => {
    const fieldName = event.target.name;

    this.setState({
      [fieldName]: event.target.value,
    });
  }

  render() {
    const { author, text } = this.state;
    return (
      <div>
        <input placeholder="author" name="author" onChange={this.handleInputChange} type="text" value={author} /><br />
        <textarea placeholder="text" name="text" onChange={this.handleInputChange} value={text}></textarea><br/>
        <button onClick={this.handleMessageSend}>Send</button>
      </div>
    );
  }
}