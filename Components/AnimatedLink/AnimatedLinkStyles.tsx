import styled from 'styled-components';

export const AnimatedLinkContainer = styled.span`
  position: relative;
  width: max-content;
  color: #2f56b0;
  text-decoration: none;
  font-size: 2.5rem;

  &::after {
    content: '';
    border-radius: 1rem;
    border-top: 0.2rem solid #2f56b0;
    position: absolute;
    right: 100%;
    bottom: -0.14rem;
    left: 0;
    transition: right 0.8s cubic-bezier(0, 0.5, 0, 1),
      border-color 0.4s ease-out;
  }

  &:hover {
    &::after {
      right: 0;
    }
  }
`;
