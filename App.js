const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ArrowForwardIos from "./screens/ArrowForwardIos";
import Text1 from "./components/Text1";
import LiveQuiz from "./screens/LiveQuiz";
import LiveQuiz1 from "./screens/LiveQuiz1";
import Group from "./screens/Group";
import Group1 from "./screens/Group1";
import RESULT from "./screens/RESULT";
import QUESTION from "./screens/QUESTION";
import QUESTION1 from "./screens/QUESTION1";
import QUIZBEGIN from "./screens/QUIZBEGIN";
import CHOSENCATEGORY from "./screens/CHOSENCATEGORY";
import CHOSENCATEGORY1 from "./screens/CHOSENCATEGORY1";
import CATEGORIES from "./screens/CATEGORIES";
import SignUp2 from "./screens/SignUp2";
import SignUp1 from "./screens/SignUp1";
import WelcomePage from "./components/WelcomePage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "ABeeZee-Regular": require("./assets/fonts/ABeeZee-Regular.ttf"),
    "Anton-Regular": require("./assets/fonts/Anton-Regular.ttf"),
    "Barlow-Bold": require("./assets/fonts/Barlow-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="ArrowForwardIos"
              component={ArrowForwardIos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LiveQuiz"
              component={LiveQuiz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LiveQuiz1"
              component={LiveQuiz1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group1"
              component={Group1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RESULT"
              component={RESULT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUESTION"
              component={QUESTION}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUESTION1"
              component={QUESTION1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QUIZBEGIN"
              component={QUIZBEGIN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CHOSENCATEGORY"
              component={CHOSENCATEGORY}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CHOSENCATEGORY1"
              component={CHOSENCATEGORY1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CATEGORIES"
              component={CATEGORIES}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp2"
              component={SignUp2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp1"
              component={SignUp1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
