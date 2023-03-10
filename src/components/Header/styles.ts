import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const StatusBarHeight = StatusBar.currentHeight;

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${Platform.OS === "ios"
        ? StatusBarHeight + 22
        : StatusBarHeight + 12}px;
    margin-bottom: 32px;
    margin-left: 32px;
    margin-right: 32px;
`;
export const Content = styled.View``;
export const ContentActions = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const ContentIcon = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    margin-left: 10px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    border-width: 0.5px;
    border-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
export const ImageUser = styled.Image`
    height: 39px;
    width: 39px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;
export const Badges = styled.View`
    height: 15px;
    width: 15px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.COLORS.SECONDARY};
    z-index: 99;
    position: absolute;
    top: -3px;
    right: -3px;
`;
