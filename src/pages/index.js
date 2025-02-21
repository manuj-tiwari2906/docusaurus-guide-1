import React from 'react';
import { Redirect } from '@docusaurus/router';
import Layout from '@theme/Layout';


export default function Home() {
  return (
    <Layout
      >
        <Redirect to="/api/" />
    </Layout>
  );
}
