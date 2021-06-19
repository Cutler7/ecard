import React from 'react';
import { InfoType } from './App';
import QrCode from './QrCode';

function Card({ data }: { data: InfoType }) {

  const listItems = data.map(({ label, value }) =>
    <div className="propertyRow" key={value}>
      <span className="propertyRow-label">{label}</span>
      <span className="propertyRow-value">{value}</span>
    </div>
  );

  return <div>
    <div className="propertyList">{listItems}</div>
  </div>;
}

export default Card;
