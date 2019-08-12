import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'

import MapScreen from '../screens/MapScreen'
import DetailsScreen from '../screens/DetailsScreen'
import FeedScreen from '../screens/FeedScreen'
import CameraScreen from '../screens/CameraScreen'

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

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Camera: {
    screen: CameraScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,
    }),
  },
  Feed: FeedScreen,
})

export default TabNavigator
