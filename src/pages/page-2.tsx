import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const SecondPage: React.FC = () => (
  <Layout>
    <SEO title="Page two" description="AirTable powered static site" lang="en" meta={[]} />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
