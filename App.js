import 'react-native-gesture-handler';


import { Text, StyleSheet, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GadgetOverviewScreen from './screens/GadgetOverviewScreen';
import GadgetDetailsScreen from './screens/GadgetDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#4C2719'},
          headerTintColor: 'white',
          sceneContainerStyle: { backgroundColor: '#330036'},
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
    </Drawer.Navigator>
  );
}

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
           name="All Categories" 
           component={DrawerNavigator} 
           options={{
            headerShown: false
            
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
