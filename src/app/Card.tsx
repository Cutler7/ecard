import React from 'react';
import { InfoType } from './App';
import QrCode from './QrCode';

function Card({ data }: { data: InfoType }) {

  const listItems = data.map(({ label, value }) =>
      <div key={value}>
        <span>{label}: </span>
        <span>{value}</span>
      </div>
  );

  return <div>
    <button onClick={() => window.location.replace(window.location.origin)}>New Card</button>
    <div>{listItems}</div>
    <QrCode/>
  </div>;
}

export default Card;
