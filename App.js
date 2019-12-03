import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import ResultScreen from './src/screens/ResultScreen'
import ErrorScreen from './src/screens/ErrorScreen'
import firebaseInitialize from './src/util/firebaseInitialize'

firebaseInitialize();

const AppNavigator = createStackNavigator({
	HomeScreen,
	ResultScreen,
	ErrorScreen
});

export default createAppContainer(AppNavigator)