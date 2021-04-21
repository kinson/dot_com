import Head from 'next/head';
import styled from 'styled-components';

const MastGroupStyles = styled.div`
  width: 60rem;
  position: relative;
  transform: rotate(-35deg);
  left: -10rem;

  @media (max-width: 45rem) {
    transform: rotate(-44deg);
    left: -18rem;
  }
`;

const MastBarStyles = styled.div`
  height: 2rem;
  background-color: ${({ color }) => color};
`;

const MiddleNameStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;

  @media (max-width: 45rem) {
    margin-top: 12rem;
  }
`;

const BigNameStyles = styled.p`
  font-size: 303%;
  margin: 0;
  font-family: 'Squada One', cursive;
  letter-spacing: 1px;
`;

const LinksBoxStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.25rem 0;
`;

const LinkStyles = styled.a`
  font-size: 101%;
  font-family: 'Libre Baskerville', serif;
  margin: 0 0.55rem;
  color: #0069d9;

  :hover {
    text-decoration: underline;
    text-underline-offset: 1px;
  }

  :first-child {
    margin-left: 0;
  }
`;

const PageStyles = styled.div`
  overflow: hidden;
`;

export default function Home() {
  return (
    <PageStyles>
      <Head>
        <title>Sam Hunter</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Squada+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MastGroupStyles>
        <MastBarStyles color="#951520" />
        <MastBarStyles color="#D4311E" />
        <MastBarStyles color="#F3B736" />
        <MastBarStyles color="#F79D38" />
      </MastGroupStyles>

      <MiddleNameStyles>
        <BigNameStyles>Welcome 👋🏼</BigNameStyles>
        <LinksBoxStyles>
          <LinkStyles href="https://github.com/kinson/">Github</LinkStyles>
          <LinkStyles href="https://www.linkedin.com/in/samwhunter/">
            LinkedIn
          </LinkStyles>
          <LinkStyles href="https://tunes.samwhunter.com/">Tunes</LinkStyles>
        </LinksBoxStyles>
      </MiddleNameStyles>
    </PageStyles>
  );
}
