import * as React from "react";

import AuthHome from "../screens/Auth/AuthHome";
import AuthSingIn from "../screens/Auth/AuthSingIn";
import AuthSingUp from "../screens/Auth/AuthSingUp";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="AuthHome" component={AuthHome} />
            <Stack.Screen name="AuthSingIn" component={AuthSingIn} />
            <Stack.Screen name="AuthSingUp" component={AuthSingUp} />
        </Stack.Navigator>
    );
};

export default AuthRoutes;
