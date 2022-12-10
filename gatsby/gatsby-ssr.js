import React from 'react';
import Layout from './src/components/layout/layout';
import { GlobalStyle } from "./src/components/styles/GlobalStyle"

export const wrapPageElement = ({ element, props })  => {
  return <Layout {...props}>
    <GlobalStyle />
    {element}
    </Layout>;
}