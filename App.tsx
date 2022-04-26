import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';
import Main from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  );
}

