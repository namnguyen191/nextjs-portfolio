import styled from 'styled-components';

export const BubbleDisplayContainer = styled.div`
  width: 20rem;
  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .title {
    font-size: 2.4rem;
  }

  a {
    transition: all 200ms ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-0.5rem);
      border-bottom: 0.2rem solid white;
    }
  }

  .description {
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  img {
    /* width: 4.5rem;
    height: 4.5rem; */
    border-radius: 100rem;
  }
`;
