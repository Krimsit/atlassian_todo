import React from 'react';

import BaseCheckbox from '@atlaskit/checkbox';

import {Label} from './Checkbox.styles';

const Checkbox = ({ isChecked, onChange, label }) => {
  return <BaseCheckbox isChecked={isChecked} onChange={onChange} size="large" label={<Label>{label}</Label>} />
}

export default Checkbox