import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ResultScreen from './src/screens/ResultScreen';
import firebaseInitialize from './src/util/firebaseInitialize'

firebaseInitialize();

const AppNavigator = createStackNavigator({
	HomeScreen,
	ResultScreen
});

export default createAppContainer(AppNavigator);