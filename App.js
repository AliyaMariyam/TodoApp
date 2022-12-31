
import React from 'react';
import {Text, View,SafeAreaView} from 'react-native';
import TodoHeader from './src/component/TodoHeader';
import TodoList from './src/component/TodoList';
import store from './src/Redux/store';
import { Provider } from 'react-redux';

const App = () =>
 {

  const RootApp = () =>{
    return(
      <SafeAreaView>
        <TodoHeader/>
        <TodoList/>
      </SafeAreaView>
    )
  }

  return(
    <Provider store={store}>
      <RootApp/>
    </Provider>
  )
}
export default App;
