import React from 'react';

export type SinglePropertyType = { label: string, value: string };
export type HandleChangeCallback = (value: string, field: 'label'|'value', index: number) => void

function SinglePropertyInput(
    { handleChange, index }: { handleChange: HandleChangeCallback, index: number}) {


  return <div>
    <input
        type="text"
        onChange={e => handleChange(e.target.value, 'label', index)}
    />
    <input
        type="text"
        onChange={e => handleChange(e.target.value, 'value', index)}
    />
  </div>;
}

export default SinglePropertyInput;
