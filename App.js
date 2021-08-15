import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { BookDetail } from './screens/';
import Tabs from './navigation/tabs';
import { COLORS } from './constants';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		border: 'transparent',
	},
};

const Stack = createStackNavigator();

const App = () => {
	return (
		<>
			<StatusBar backgroundColor={COLORS.black} barStyle='light-content' />
			<NavigationContainer theme={theme}>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
					initialRouteName={'Home'}>
					{/* Tabs */}
					<Stack.Screen name='Home' component={Tabs} />

					{/* Screens */}
					<Stack.Screen
						name='BookDetail'
						component={BookDetail}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;
