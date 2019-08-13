import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'

import MapScreen from '../screens/MapScreen'
import DetailsScreen from '../screens/DetailsScreen'
import FeedScreen from '../screens/FeedScreen'
import CameraScreen from '../screens/CameraScreen'
import FormScreen from '../screens/FormScreen'

const HomeStack = createStackNavigator(
  {
    Map: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Hello world',
        header: null,
      }),
    },
    Details: DetailsScreen,
  },
  {
    mode: 'modal',
  },
)

const CameraStack = createStackNavigator(
  {
    Camera: {
      screen: CameraScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        header: null,
      }),
    },
    Form: {
      screen: FormScreen,
      navigationOptions: () => ({
        header: null,
        tabBarVisible: false,
      }),
    },
  },
  {
    // might change to modal or a special transition effect from that library
    mode: 'card',
  },
)

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Camera: {
    screen: CameraStack,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
  Feed: FeedScreen,
})

export default TabNavigator
