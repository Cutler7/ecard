import React from 'react';
import { InfoType } from './App';

function Card({ data }: { data: InfoType }) {

  const listItems = data.map(({ label, value }) =>
      <div>
        <span>{label}: </span>
        <span>{value}</span>
      </div>
  );

  return <div>{listItems}</div>;
}

export default Card;
