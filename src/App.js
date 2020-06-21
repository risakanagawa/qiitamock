import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from '@fortawesome/free-regular-svg-icons';
import './App.scss';
import Layout from './layout/Layout';
import Container from './components/Container';

library.add(fab, fas, far);

function App() {
  return (
    <Layout >
      <Container />
    </Layout>
  );
}

export default App;
