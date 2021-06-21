import React from 'react';
import { InfoType } from './App';
import QrCode from './QrCode';
import FooterWrapper from "../components/molecules/FooterWrapper";
import LabelValueCell from "../components/molecules/LabelValueCell";
import LabelValueCellWrapper from "../components/molecules/LabelValueCellWrapper";

function Card({ data }: { data: InfoType }) {
  const listItems = data.map(({ label, value }, index) => (
    <LabelValueCell key={`cell-${index}`} label={label} value={value} />
  ));

  return <>
    <div>
      <button onClick={() => window.location.replace(window.location.origin)}>New Card</button>
      <LabelValueCellWrapper>{listItems}</LabelValueCellWrapper>
    </div>
    <FooterWrapper>
      <QrCode/>
    </FooterWrapper>
  </>;
}

export default Card;
