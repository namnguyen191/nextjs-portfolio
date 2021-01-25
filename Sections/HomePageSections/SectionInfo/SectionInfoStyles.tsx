import styled from 'styled-components';

export const SectionInfoContainer = styled.section`
  display: flex;
  justify-content: center;

  h3 {
    font-size: 3rem;
  }

  .container {
    width: 50%;

    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    padding: 0 6rem;

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
`;
