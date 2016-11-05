import React from 'react';
import Layout from './components/layout';
import RandomColor from './components/color_component'

export default (props) => {
  return (
   <Layout>
   <RandomColor />
   <RandomColor />
   <RandomColor />
   <RandomColor />
   </Layout>
  );
};