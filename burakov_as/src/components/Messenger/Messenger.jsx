import './Messenger.css';

import React, { Fragment, PureComponent } from 'react';

import {MessagesList} from 'components/MessagesList';
import {MessageForm} from 'components/MessageForm';
import { ChatList } from 'components/ChatList';
import { HeaderRedux } from 'containers/HeaderContainer';
 
import Grid from '@material-ui/core/Grid'; 
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
export class Messenger extends PureComponent{
  render() {
    const { chats, messages, sendMessage, addChat, removeChat } = this.props;
  
    return (
      <Fragment>
        <div className="messenger">
          <HeaderRedux />
          <div className="layout">
          <Link className="no-decor" to="/profile">  
          <Button variant="contained" color="primary">
                Profile
              </Button>
              </Link>
          <Grid container>
            <Grid item xs={3}>
              <ChatList removeChat={removeChat} addChat={addChat} chats={chats}/>
            </Grid>
              <Grid item xs={8}>            
                <div>
                  {messages ? <MessagesList items={messages} /> : 'Выберите чат, чтобы продолжить общение'}
                  {messages && <MessageForm onSend={sendMessage} /> }
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Fragment>
    )
  }
}