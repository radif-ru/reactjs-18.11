import './ChatList.scss';

import React, {Component, PureComponent} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';

export class ChatList extends PureComponent {
  render() {
    const {chats, addChat} = this.props;

    return (
      <List className="chat-list">
        {chats.map((chat, idx) =>
          <ListItem key={idx} className="chat-item">
            <Link to={chat.link}>
              <ListItemText primary={chat.name}></ListItemText>
            </Link>
          </ListItem>)}
        <Button onClick={addChat}>
          <ListItemText primary="+ Добавить чат"></ListItemText>
        </Button>
      </List>
    )
  }
}