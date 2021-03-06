import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile111413Navigator from '../features/UserProfile111413/navigator';
import Tutorial111412Navigator from '../features/Tutorial111412/navigator';
import NotificationList111384Navigator from '../features/NotificationList111384/navigator';
import Settings111383Navigator from '../features/Settings111383/navigator';
import Settings111375Navigator from '../features/Settings111375/navigator';
import UserProfile111373Navigator from '../features/UserProfile111373/navigator';
import BlankScreen20111351Navigator from '../features/BlankScreen20111351/navigator';
import ArticleList111350Navigator from '../features/ArticleList111350/navigator';
import Maps111337Navigator from '../features/Maps111337/navigator';
import ArticleList111314Navigator from '../features/ArticleList111314/navigator';
import Maps111301Navigator from '../features/Maps111301/navigator';
import BlankScreen0111295Navigator from '../features/BlankScreen0111295/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile111413: { screen: UserProfile111413Navigator },
Tutorial111412: { screen: Tutorial111412Navigator },
NotificationList111384: { screen: NotificationList111384Navigator },
Settings111383: { screen: Settings111383Navigator },
Settings111375: { screen: Settings111375Navigator },
UserProfile111373: { screen: UserProfile111373Navigator },
BlankScreen20111351: { screen: BlankScreen20111351Navigator },
ArticleList111350: { screen: ArticleList111350Navigator },
Maps111337: { screen: Maps111337Navigator },
ArticleList111314: { screen: ArticleList111314Navigator },
Maps111301: { screen: Maps111301Navigator },
BlankScreen0111295: { screen: BlankScreen0111295Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
