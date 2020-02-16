import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import OnboardingScreen from './screens/OnboardingScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Onboarding: {
      screen: OnboardingScreen,
    },
    Dashboard: {
      screen: DashboardScreen,
    },
  },
  // {initialRouteName: 'Home'},
  {initialRouteName: 'Dashboard'},
);

export default createAppContainer(AppNavigator);
