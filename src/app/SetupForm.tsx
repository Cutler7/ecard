import React, { useState } from 'react';
import SinglePropertyInput from './SinglePropertyInput';
import { InfoType } from './App';
import toBinary from '../util/toBinary';
import FooterWrapper from "../components/molecules/FooterWrapper";
import LabelValueCellWrapper from "../components/molecules/LabelValueCellWrapper";

// <szpachla> (do zaorania)
import styled from "styled-components";
const sharedSzpachla = `
  padding: 20px 15px;
  border: 0px solid transparent;
  margin: 15px;
  border-radius: 20px;
  cursor: pointer;
`;
const Baton = styled.button`
 ${sharedSzpachla}
`;
const Imput = styled.input`
  ${sharedSzpachla}
`;
// </szpachla>


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
    <LabelValueCellWrapper>
      {getInputList()}
    </LabelValueCellWrapper>
    
    <FooterWrapper>
      <Baton type="button" onClick={handleAddProperty}>Add property</Baton>
      <Imput type="submit" value="Submit" />
    </FooterWrapper>
  </form>;
}

export default SetupForm;
