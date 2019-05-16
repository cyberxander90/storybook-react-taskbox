
import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import Task from './task';

export const task = {
  id: '1',
  title: 'My task',
  state: 'TASK_INBOX'
};

export const actions = {
  onArchiveTask: action('onArchiveTask'),
  onPinTask: action('onPinTask')
};

storiesOf('Task', module)
  .addDecorator(withKnobs)
  .add('default', () => <Task task={{...task, title: text('Title', task.title)}} {...actions} />)
  .add('with long title', () => <Task task={{...task, title: text('Title', `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not`)}} {...actions} />)
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);
