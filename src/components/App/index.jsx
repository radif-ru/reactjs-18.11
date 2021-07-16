import React from 'react';
import ReactDom from 'react-dom';

// import {User} from "../../user";
import {App} from './index';

// const user = new User('Oleg', 'Petrovich')
// const messages = ['Привет, друг', 'How are you doing?'];
//
// const Message = (props) => <div>{props.text}</div>; // dumb component
// const MessagesList = (props) => {
//   // const el = props.messages.map((message) => <Message text={message} />);
//   // console.log(el);
//   return props.messages.map((message) => <Message text={message}/>)
// }
//
// ReactDom.render(
//   <Message text={user.sayHi()}/>,
//   document.getElementById('user')
// );
//
// ReactDom.render(
//   <MessagesList messages={messages}/>,
//   document.getElementById('root')
// );


ReactDom.render(
  <App/>,
  document.getElementById('root')
);