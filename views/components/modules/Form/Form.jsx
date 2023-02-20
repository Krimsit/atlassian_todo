import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { v4 as uuid } from "uuid"

import { fetchIssues } from "../../../store/todo"

import LoadingButton from '@atlaskit/button/loading-button';
import BaseForm, {
  Field,
  FormFooter,
  FormHeader,
  FormSection,
} from '@atlaskit/form';
import ProjectInput from './ProjectInput';
import TextField from '@atlaskit/textfield';

import { Container } from "./Form.styles"
import Button from '@atlaskit/button';

const Form = () => {
  const dispatch = useDispatch()

  const [projects, setProjects] = useState([{
    id: uuid(),
    value: ""
  }])

  const projectsActions = {
    add: () => setProjects([...projects, {
      id: uuid(),
      value: ""
    }]),
    remove: (id) => setProjects(projects.filter(item => item.id !== id))
  }

  const handleSubmit = (data) => {
    const projects = data.project.map((item) => `project=${item}`).join(" OR ")

    const jqlQuery = `${projects}&maxResults=${data.maxResults}`

    dispatch(fetchIssues(jqlQuery))
  }

  return <BaseForm
      onSubmit={handleSubmit}
  >
    {({formProps, submitting}) => (
        <form {...formProps}>
          <FormHeader
              title="Загрузить задачи"
              description="Загрузите задачи из своих проектов"
          />
          <FormSection>
            <Container>
              {projects.map((item, index) => <ProjectInput key={item.id} remove={projectsActions.remove} index={index} {...item} />)}
              <Button onClick={projectsActions.add}>Добавить проект</Button>
              <Field
                  aria-required={true}
                  name="maxResults"
                  label="Максимальное кол-во в выборке"
                  defaultValue="50"
                  isRequired
              >
                {({fieldProps}) => <TextField {...fieldProps} />}
              </Field>
            </Container>
          </FormSection>
          <FormFooter>
            <LoadingButton
                type="submit"
                appearance="primary"
                isLoading={submitting}
            >
              Получить задачи
            </LoadingButton>
          </FormFooter>
        </form>
    )}
  </BaseForm>
};

export default Form