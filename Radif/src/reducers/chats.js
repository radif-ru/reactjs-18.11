import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { load, send } from 'actions/chats';

const initialState = new Map({
  loading: false,
  entries: new Map(),
});

export const chatsReducer = handleActions({
  [load]: (state, action) => { // state = PrevState
    return state.set('entries', fromJS({
      '1': {
        id: 1,
        messages: [
          { text: 'Привет! Это чат №1', author: 'Bot' },
        ],
        name: 'Chat 1',
      },
      '2': {
        id: 2,
        messages: [
          { text: 'Привет! Это чат №2', author: 'Bot' },
        ],
        name: 'Chat 2',
      },
      '3': {
        id: 3,
        messages: [
          { text: 'Привет! Это чат №3', author: 'Bot' },
        ],
        name: 'Chat 3',
      }
    }));
  },
  [send]: (state, action) => {
    const { chatId, ...message } = action.payload;

    return state.mergeIn(['entries', chatId, 'messages'], message);
  }
}, initialState);
