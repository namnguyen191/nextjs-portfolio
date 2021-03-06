import styled from 'styled-components';

export const HomeContainer = styled.div`
  main {
    /* Match navbar width */
    margin-left: 4.5rem;
    display: flex;
    flex-direction: column;
    gap: 10rem;
  }

  @media only screen and (max-width: 1200px) {
    main {
      margin-left: 0;
    }
  }
`;
