import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Color from "../constant/Color";
import { Platform } from "react-native";

import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlacesListScreen ,{screenOptions as placelistOptions} from "../screens/PlacesListScreen";

const PlacesNavigator = createNativeStackNavigator();

export const PlacesNavigatorFun = () => {
  return (
    <PlacesNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS == "android" ? Color.primary : "",
        },
        headerTintColor: Platform.OS == "android" ? "white" : Color.primary,
      }}
    >
      <PlacesNavigator.Screen name="Places" component={PlacesListScreen} options={placelistOptions}/>
      <PlacesNavigator.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}

      />
      <PlacesNavigator.Screen name="NewPlace" component={NewPlaceScreen} />
      <PlacesNavigator.Screen name="Map" component={MapScreen} />
    </PlacesNavigator.Navigator>
  );
};
