import React from 'react';
import LabelValueCell from "../components/molecules/LabelValueCell";

export type SinglePropertyType = { label: string, value: string };
export type HandleChangeCallback = (value: string, field: 'label'|'value', index: number) => void

function SinglePropertyInput(
    { handleChange, index }: { handleChange: HandleChangeCallback, index: number}) {


  return <LabelValueCell
    label={<input
        type="text"
        placeholder="Name"
        onChange={e => handleChange(e.target.value, 'label', index)}
    />}
    value={<input
        type="text"
        placeholder="Value"
        onChange={e => handleChange(e.target.value, 'value', index)}
    />}
  />;
}

export default SinglePropertyInput;
