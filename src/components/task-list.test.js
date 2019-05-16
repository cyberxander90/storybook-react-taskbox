import React from 'react';
import ReactDOM from 'react-dom';

import { PureTaskList } from './task-list';
import { withPinnedTasks } from './task-list.stories';

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  const events = {
    onPinTask: jest.fn(),
    onArchiveTask: jest.fn()
  };
  ReactDOM.render(
    <PureTaskList tasks={withPinnedTasks} {...events} />,
    div
  );

  // We expect the task titled "Task 5 (pinned)" to be rendered first, not at the end
  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 5 (pinned)"]');
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});