import './ChatList.scss';

import React, {Component} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

export class ChatList extends Component {
  render() {
    return (
      <List className="chat-list">
        <ListItem className="chat-item">
          <Link to="/chats/1">
            <ListItemText primary="Chat 1"></ListItemText>
          </Link>
        </ListItem>
        <ListItem className="chat-item">
          <Link to="/chats/2">
            <ListItemText primary="Chat 2"></ListItemText>
          </Link>
        </ListItem>
        <ListItem className="chat-item">
          <Link to="/chats/3">
            <ListItemText primary="Chat 3"></ListItemText>
          </Link>
        </ListItem>
      </List>
    )
  }
}