import React from 'react';
import {useDispatch} from 'react-redux';

import {toggleIssue, deleteIssue} from '../../../store/todo';

import Button from '@atlaskit/button';
import EditorRemoveIcon from '@atlaskit/icon/glyph/editor/remove';
import {Checkbox} from '../index';

import {Base} from './TodoItem.styles';

const TodoItem = ({id, fields, key, checked}) => {
  const dispatch = useDispatch();

  const actions = {
    toggle: () => dispatch(toggleIssue(id)),
    delete: () => dispatch(deleteIssue(id)),
  };

  return <Base>
    <Checkbox isChecked={checked} onChange={actions.toggle}
              label={fields.summary}/>
    <Button onClick={actions.delete} appearance="danger"
            iconBefore={<EditorRemoveIcon size="large"/>}/>
  </Base>;
};

export default TodoItem;