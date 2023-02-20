import React from 'react';

import {
  Field,
  HelperMessage,
} from '@atlaskit/form';
import CrossCircleIcon from '@atlaskit/icon/glyph/cross-circle';
import TextField from '@atlaskit/textfield';
import Button from '@atlaskit/button';

import {ProjectInputBase} from './Form.styles';

const ProjectInput = ({id, value, index, remove}) => {
  const handleRemove = () => remove(id);

  return <ProjectInputBase>
    <Field
        aria-required={true}
        name={`project[${index}]`}
        label="Ключ проекта"
        isRequired
        defaultValue={value}
    >
      {({fieldProps, error}) => (
          <>
            <TextField autoComplete="off" {...fieldProps} />
            {!error && (
                <HelperMessage>
                  Ключ можно найти в его настройках нужного проекта
                </HelperMessage>
            )}
          </>
      )}
    </Field>
    <Button onClick={handleRemove} appearance="subtle"
            iconBefore={<CrossCircleIcon size="large"/>}/>
  </ProjectInputBase>;
};

export default ProjectInput;