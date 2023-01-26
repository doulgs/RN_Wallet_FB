import * as React from "react";
import { Text, View } from "react-native";
import { useTheme } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icons from "../assets/Icons";

import Home from "../screens/Home";
import Report from "../screens/Report";
import Settings from "../screens/Settings";
import Transection from "../screens/Transection";

function ActionScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
    const { COLORS } = useTheme();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.PRIMARY,
                tabBarInactiveTintColor: "gray",

                tabBarStyle: {
                    backgroundColor: COLORS.WHITE,
                    borderTopWidth: 0,

                    position: "absolute",
                    borderRadius: 32,
                    height: 55,
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return focused ? (
                            <Icons name="HomeFill" size={size} fill={color} />
                        ) : (
                            <Icons name="HomeFill" size={size} fill={color} />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Transection"
                component={Transection}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return focused ? (
                            <Icons name="TicketFill" size={size} fill={color} />
                        ) : (
                            <Icons name="TicketFill" size={size} fill={color} />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Action"
                component={ActionScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 30,
                                    height: 50,
                                    width: 50,
                                    backgroundColor: COLORS.PRIMARY,
                                    position: "absolute",
                                    top: -10,
                                }}
                            >
                                {focused ? (
                                    <Icons
                                        name="QRcodeFill"
                                        size={size}
                                        fill="#FFF"
                                    />
                                ) : (
                                    <Icons
                                        name="QRcode"
                                        size={size}
                                        fill="#FFF"
                                    />
                                )}
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Report"
                component={Report}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return focused ? (
                            <Icons
                                name="ClipboardFill"
                                size={size}
                                fill={color}
                            />
                        ) : (
                            <Icons
                                name="ClipboardFill"
                                size={size}
                                fill={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return focused ? (
                            <Icons name="GearFill" size={size} fill={color} />
                        ) : (
                            <Icons name="GearFill" size={size} fill={color} />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default AppRoutes;
