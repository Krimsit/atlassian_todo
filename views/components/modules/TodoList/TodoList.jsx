import React from 'react';

import {useToDo} from '../../../context/ToDoContext';

import Spinner from '@atlaskit/spinner';
import EmptyState from '@atlaskit/empty-state';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import TrayIcon from '@atlaskit/icon/glyph/tray';
import {TodoItem} from '../../ui';

import {List, LoaderContainer} from './TodoList.styles';

const TodoList = () => {
  const {issues, queryStatus} = useToDo();

  if (queryStatus === 'loading') {
    return <LoaderContainer>
      <Spinner interactionName="load" size="large"/>
    </LoaderContainer>;
  }

  if (queryStatus === 'error') {
    return <EmptyState header="Ошибка"
                       description="Возникли ошибки при получении задач"
                       renderImage={() => <ErrorIcon size="large"/>}/>;
  }

  if (queryStatus === 'idle') {
    return <EmptyState header="Вы ещё не загрузили задачи"
                       description="Добавьте проекты в форме выше, чтобы загрузить нужные Вам задачи"/>;
  }

  if (queryStatus === 'success' && issues.length === 0) {
    return <EmptyState header="У Вас нет задач"
                       description="Среди указанных в форме проектов не удалось найти задачи"
                       renderImage={() => <TrayIcon size="large"/>}/>;
  }


  return <List>
    {issues.map(issue => <TodoItem key={issue.id} {...issue} />)}
  </List>;
};

export default TodoList;