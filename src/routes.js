import { createAppContainer, createStackNavigator } from 'react-navigation';

import { colors } from '~/styles';

import Intro from '~/pages/Intro';
import Login from '~/pages/Login';

const Routes = createAppContainer(
  createStackNavigator({
    Intro: {
      screen: Intro,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerTransparent: true,
        headerTintColor: colors.white,
      },
    },
  }),
);

export default Routes;
