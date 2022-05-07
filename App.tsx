import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store/index'
import Main from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main/>
      </NavigationContainer>
    </Provider>
  )
}

