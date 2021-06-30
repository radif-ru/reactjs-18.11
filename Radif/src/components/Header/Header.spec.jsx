import React from 'react';
import { Header } from './Header';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('Header should be rendered', () => { // snapshot test
  const tree = renderer
    .create(<Header chats={[{name: 'Chat1'}, {name: 'Chat2'}]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Header should be rendered as span', () => { // shallow test
  const header = shallow(<Header chats={[{name: 'Chat1'}, {name: 'Chat2'}]} />);
  const lis = header.find('span');

  expect(lis.length).toBe(3);
  expect(lis.first().text()).toBe('Список чатов:');
  expect(lis.last().text()).toBe('Chat2; ');
});
