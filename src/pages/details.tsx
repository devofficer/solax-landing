import React from "react";
import type { NextPage } from "next";

import { Container, Page } from "components";
import { Documents, JoinSale, PrivateSale, Token } from "views";

const Details: NextPage = () => {
  return (
    <Page name="details">
      <Container>
        <Token />
        <PrivateSale />
        <JoinSale />
        {/* <Documents /> */}
      </Container>
    </Page>
  );
};

export default Details;
