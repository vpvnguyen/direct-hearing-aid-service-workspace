import * as React from "react";
import Helmet from "@components/Helmet";
import { ContentContainer } from "@layouts";
import Link from "@components/Link";

const NotFoundPage = () => {
  return (
    <ContentContainer>
      <div css={theme => ({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' })}>
        <h1>Page Not Found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
        </p>
        <div css={theme => ({
          maxWidth: '320px'
        })}>
        <Link to="/">{"<"}{" "}Go back to Home Page</Link>
        </div>
      </div>
    </ContentContainer>
  );
};

export default NotFoundPage;

export const Head = ({ location }) => {
  return (
    <>
      <Helmet location={location} />
    </>
  );
};
