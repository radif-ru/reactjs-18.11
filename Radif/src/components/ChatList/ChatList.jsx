import './ChatList.scss';

import React, {Component} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

export class ChatList extends Component {
  render() {
    const {chats} = this.props;

    return (
      <List className="chat-list"> {chats.map((chat, idx) =>
        <ListItem key={idx} className="chat-item">
          <Link to={chat.link}>
            <ListItemText primary={chat.name}></ListItemText>
          </Link>
        </ListItem>)}
      </List>
    )
  }
}