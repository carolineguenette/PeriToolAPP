import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens Import
import HomeScreen from "../screens/HomeScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";
import ListPrenatalScreen from "../screens/clientModule/ListPrenatalScreen";
import ListPostnatalScreen from "../screens/clientModule/ListPostnatalScreen";

//UI Import
import IconButton from "../ui/IconButton";

//*****************************************************
const StackNav = createNativeStackNavigator();

//*****************************************************
export default function NavigationSetup({ navigation }) {
  /******************************************
   * Function that returns options screen for the HomeScreen
   * The header colors is 'merge' with content background color.
   * The header have 3 buttons icon:
   *  left: menu
   *  right: help and logout
   */
  function homeScreenOptions({ navigation, route }) {
    return {
      headerStyle: { backgroundColor: "#ffffff" },
      headerShadowVisible: false,
      title: "",
      headerLeft: () => {
        return <IconButton icon='menu' size={24} color='#666666' onPress={() => navigation.openDrawer()} />;
      },
      headerRight: () => {
        return (
          <>
            <IconButton icon='help-circle-outline' size={24} color='#666666' onPress={() => alert("TODO: Open Help Screen")} />
            <IconButton icon='logout-variant' size={24} color='#666666' onPress={() => alert("TODO: LogOut")} />
          </>
        );
      },
      //statusBarStyle: "dark", //DO NOT WORK ON ios. Errormsg: UIViewControlBasedStatusBarAppearance in Info.plist to yes
    };
  }

  /******************************************
   * Function that returns options screen (all normal screens)
   * The header colors is in primary color.
   * The header button icon are (color in contrast with the primary color)
   *  left: back when available
   * The header title color is in contrast with the primary color
   * //TODO: Status Bar color must be adjust
   */
  function defaultScreenOptions({ navigation, route }) {
    return {
      headerStyle: { backgroundColor: "#b53fd9" },
      headerTitleAlign: "center",
      headerTintColor: "#ffffff",
      headerRight: () => {
        return <IconButton icon='menu' size={24} color='#ffffff' onPress={() => navigation.openDrawer()} />;
      },
      //statusBarStyle: "light", //DO NOT WORK ON ios. Errormsg: UIViewControlBasedStatusBarAppearance in Info.plist to yes
      navigationBarColor: "#ffffff",
    };
  }

  return (
    <StackNav.Navigator>
      <StackNav.Screen name='Home' component={HomeScreen} options={homeScreenOptions} />
      <StackNav.Group screenOptions={defaultScreenOptions}>
        <StackNav.Screen name='Second' component={SecondScreen} />
        <StackNav.Screen name='Third' component={ThirdScreen} />
        <StackNav.Screen name='ListPrenatal' component={ListPrenatalScreen} />
        <StackNav.Screen name='ListPostnatal' component={ListPostnatalScreen} />
      </StackNav.Group>
    </StackNav.Navigator>
  );
}
