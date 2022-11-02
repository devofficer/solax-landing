import type { NextPage } from "next";

import { Container, Page } from "components";
import { Hero, ProtocolFeature, TokenDetails, TrustBy, UseCase } from "views";

const Home: NextPage = () => {
  return (
    <Page name="default">
      <div className="tv:relative tv:h-[calc(100vh-88px)] desktop:h-full">
        <Hero />
        <div className="tv:absolute tv:w-full tv:bottom-0 between:relative between:h-full">
          <TrustBy />
        </div>
      </div>
      <Container>
        <ProtocolFeature />
        <UseCase />
        <TokenDetails />
      </Container>
    </Page>
  );
};

export default Home;
