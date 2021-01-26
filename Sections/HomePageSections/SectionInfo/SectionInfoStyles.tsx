import styled from 'styled-components';

export const SectionInfoContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 4vw;

  padding: 4vw;

  h3 {
    font-size: 3rem;
  }

  .container {
    width: 50%;

    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    color: #242325;
  }

  .contact-link-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  .quote {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0 4vw;
    gap: 4rem;

    .container {
      width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    img {
      display: none !important;
    }
  }
`;
