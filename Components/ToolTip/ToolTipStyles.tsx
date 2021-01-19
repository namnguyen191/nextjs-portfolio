import styled from 'styled-components';

export const ToolTipText = styled.div`
  visibility: hidden;
  font-size: 1rem;
  width: 9rem;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 0.6rem;
  padding: 0.5rem 0;
  position: absolute;
  z-index: 1;
  top: 90%;
  left: 50%;
  margin-left: -4.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -0.5rem;
    border-width: 0.5rem;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }
`;

export const ToolTipContainer = styled.div`
  position: relative;

  &:hover ${ToolTipText} {
    visibility: visible;
  }
`;
