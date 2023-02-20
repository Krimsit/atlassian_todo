import React from 'react';

import { useToDo } from "../../../context/ToDoContext"

import {
  FormHeader,
} from '@atlaskit/form';
import Checkbox from "../../ui/Checkbox/Checkbox"

import { Container } from "./Filter.styles"

const Filter = () => {
  const { onlyChecked, toggleOnlyChecked } = useToDo()

  return <>
    <Container>
      <FormHeader title="Фильтр по задачам" description="Вы можете отфильтровывать задачи по вашим критериям" />
      <Checkbox isChecked={onlyChecked} onChange={toggleOnlyChecked} label="Только выполненные" />
    </Container>
  </>
}

export default Filter