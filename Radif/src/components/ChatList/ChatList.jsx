import './ChatList.scss';

import React, {Component, PureComponent} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Remove';
import moment from 'moment';

moment.locale('ru');

export class ChatList extends PureComponent {
  handleChatRemove = (chatId) => () => {
    const {removeChat} = this.props;

    removeChat(chatId);
  }

  render() {
    const {chats, addChat} = this.props;

    return (
      <List className="chat-list">
        {chats.map((chat, idx) =>
          <ListItem key={idx} className="chat-item">
            <Link to={chat.link}>
              <ListItemText
                className="chat-date"
                primary={`[${moment(chat.timestamp).format('LLL')}]`}>
              </ListItemText>
              <ListItemText className="chat-name" primary={`${chat.name}`}>
              </ListItemText>
              <Fab variant="round" color="secondary" size="small"
                   className="remove-button"
                   onClick={this.handleChatRemove(chat._id)}>
                <DeleteIcon fontSize="small"/>
              </Fab>
            </Link>
          </ListItem>)}
        <Button onClick={addChat}>
          <ListItemText primary="+ Добавить чат"></ListItemText>
        </Button>
      </List>
    )
  }
}