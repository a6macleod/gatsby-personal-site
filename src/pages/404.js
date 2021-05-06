import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';

const FourOhFourStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <FourOhFourStyles>
      <h1>404: Not Found</h1>
      <p>This page does not exist!?!?</p>
    </FourOhFourStyles>
  </Layout>
);

export default NotFoundPage;
