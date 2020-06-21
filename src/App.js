import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from "@fortawesome/free-solid-svg-icons";

import logo from './logo.svg';
import './App.scss';
import Layout from './layout/Layout';
import MainContainer from './components/MainContainer';

library.add(fab, fas);

function App() {
  return (
    <Layout >
      <MainContainer />
    </Layout>
  );
}

export default App;
