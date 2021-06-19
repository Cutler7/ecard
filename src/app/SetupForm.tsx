import React, { useState } from 'react';
import SinglePropertyInput from './SinglePropertyInput';
import { InfoType } from './App';
import toBinary from '../util/toBinary';

function SetupForm() {

  const [formValue, setFormValue] = useState<InfoType>([{label: '', value: ''}]);

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const encoded = toBinary(JSON.stringify(formValue));
    window.location.replace(`${window.location.origin}?info=${encoded}`)
  }

  const handleChange = (value: string, field: 'label'|'value', index: number) => {
    formValue[index][field] = value;
    setFormValue(formValue);
  }

  const handleAddProperty = () => {
    formValue.push({label: '', value: ''});
    setFormValue([...formValue]);
  }

  const getInputList = () => formValue.map((_, index) =>
      <SinglePropertyInput key={index} handleChange={handleChange} index={index}/>)

  return <form onSubmit={handleSubmit as any}>
    {getInputList()}
    <button type="button" onClick={handleAddProperty}>Add property</button>
    <input type="submit" value="Submit" />
  </form>;
}

export default SetupForm;
