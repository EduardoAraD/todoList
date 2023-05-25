import { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screen/Home';

export default function App() {
  return (
    <Fragment>
      <Home />
      <StatusBar style="light" translucent />
    </Fragment>
  );
}
