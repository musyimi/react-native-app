import 'react-native-gesture-handler';


import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
    </>
    ) ;
}

const styles = StyleSheet.create({
  container: {

  },

});
