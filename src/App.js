import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import MainTabs from './routes/Navigation';
import StatusBar from './components/StatusBar';

export default () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <MainTabs />
    </SafeAreaProvider>
  );
};
