import styled from 'styled-components';

export const FloatingCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 20vw;

  padding: 0.8rem 2rem;

  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0rem 1.2rem 2.8rem rgba(0, 0, 0, 0.15);

  font-size: 1.2rem;
  text-transform: uppercase;

  transition: transform 200ms ease-in;

  &:hover {
    transform: translateY(-1.2rem);
  }

  img {
    width: 5rem;
    height: 5rem;
  }

  h5 {
    margin: 0.5rem 0;
    font-size: 1.5rem;
  }
`;
