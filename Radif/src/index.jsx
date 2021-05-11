import React from 'react';
import ReactDom from 'react-dom';

import {User} from "./user";

const user = new User('Oleg', 'Petrovich')
const messages = ['Привет, друг', 'How are you doing?'];

const Message = (props) => <div>{props.text}</div>;
const MessageList = (props) => {
    // const el = props.messages.map((message) => <Message text={message} />);
    // console.log(el);
    return props.messages.map((message) => <Message text={message} />)
}

ReactDom.render(
    <Message text={user.sayHi()} />,
    document.getElementById('user')
);

ReactDom.render(
    <MessageList messages={messages} />,
    document.getElementById('root')
);