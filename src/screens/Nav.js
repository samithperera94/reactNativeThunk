import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from './Login';
import Dashboard from './Dashboard';



let RootStack = createStackNavigator({
    Login:Login,
    Dash: Dashboard,
  });
  
  
  let Navigation = createAppContainer(RootStack);
  
  export default Navigation;