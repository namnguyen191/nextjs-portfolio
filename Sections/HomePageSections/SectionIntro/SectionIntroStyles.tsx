import styled from 'styled-components';

export const SectionIntroContainer = styled.section`
  height: 80vh;

  display: grid;
  grid-template-columns: 5fr 3fr;

  color: #f9f7f6;

  .type-writer-container {
    display: inline;
  }

  .head-lines {
    background-image: linear-gradient(
        52deg,
        rgba(0, 0, 0, 1),
        rgba(148, 129, 127, 0.5)
      ),
      url('./nam-photo-no-bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 3rem;

    span {
      margin-top: 3rem;
      font-size: 3rem;
    }
  }

  h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-size: 2.5rem;
    color: #bde4b8;
  }

  .top-3-projects {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    padding: 8rem;

    background: #0f2027; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #2c5364,
      #203a43,
      #0f2027
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #2c5364,
      #203a43,
      #0f2027
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  @media only screen and (max-width: 1650px) {
    h1 {
      font-size: 4rem;
    }

    .type-writer-container {
      display: block;
    }
  }

  @media only screen and (max-width: 1200px) {
    height: auto;

    grid-template-columns: 1fr;
    grid-template-rows: 5fr 3fr;

    .head-lines {
    }

    .top-3-projects {
      padding: 3rem;
    }
  }

  @media only screen and (max-width: 500px) {
    .head-lines {
      padding: 1rem;
    }

    .top-3-projects {
      padding: 3rem 0;
    }
  }
`;
