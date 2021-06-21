import React from "react";
import styled from "styled-components";

type LabelValueCellProps = {
  label: string | JSX.Element;
  value: string | JSX.Element;
};

const LabelValueCellContainer = styled.div`
  position: relative;
  width: calc(100vw - 20px);
  background: var(--background-lighter);
  margin-bottom: 7px;
  display: flex;
  flex-direction: column;
  padding: 6px 6px 8px 6px;
`;

const removeInputStyles = `
  border: none;
`;

const sharedInputStyles = `
  border-radius: 5px;
  max-width: 100%;
`;

const LabelValueCellLabel = styled.span`
  &, & > input {
    font-size: 14px;
    ${removeInputStyles}
  }
  & > input {
    ${sharedInputStyles}
  }
`;

const LabelValueCellValue = styled.span`
  &, & > input {
    font-size: 24px;
    margin: 2px 5px 0px 5px;
    ${removeInputStyles}
  }
  & > input {
    ${sharedInputStyles}
  }
`;

const LabelValueCell = ({
  label,
  value
}: LabelValueCellProps) => (
  <LabelValueCellContainer>
    <LabelValueCellLabel>{label}</LabelValueCellLabel>
    <LabelValueCellValue>{value}</LabelValueCellValue>
  </LabelValueCellContainer>
);

export default LabelValueCell;
