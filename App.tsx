import React from "react";
import Routes from "./src/routes";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/styles/theme";
import { StatusBar } from "expo-status-bar";

const App: React.FC = () => {
    const [isFontLoaded] = useFonts({
        "Lufga-500": require("./src/assets/fonts/Lufga-Light.otf"),
        "Lufga-600": require("./src/assets/fonts/Lufga-Regular.otf"),
        "Lufga-700": require("./src/assets/fonts/Lufga-Medium.otf"),
        "Lufga-800": require("./src/assets/fonts/Lufga-Bold.otf"),
        "Lufga-900": require("./src/assets/fonts/Lufga-ExtraBoldItalic.otf"),
    });

    if (!isFontLoaded) {
        return null;
    }
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <StatusBar style="auto" translucent={false} />
                <Routes />
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
