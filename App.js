import 'react-native-gesture-handler';


import { Text, StyleSheet, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GadgetOverviewScreen from './screens/GadgetOverviewScreen';
import GadgetDetailsScreen from './screens/GadgetDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='light'/>

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#4C2719'},
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#330036'},
        }}
      >
        <Stack.Screen 
           name="Categories" 
           component={CategoriesScreen} 
           options={{
            title: 'All Categories',
            
           }}/>
        <Stack.Screen name="Overview" component={GadgetOverviewScreen} />
        <Stack.Screen name="GadgetDetails"
         component={GadgetDetailsScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>
    
    </>
    ) ;
}

const styles = StyleSheet.create({
  container: {

  },

});
