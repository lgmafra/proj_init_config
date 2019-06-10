import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Intro from '~/pages/Intro';
import Login from '~/pages/Login';

const Routes = createAppContainer(
  createSwitchNavigator({
    Intro,
    Login,
  }),
);

export default Routes;
