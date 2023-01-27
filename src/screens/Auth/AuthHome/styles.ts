import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

interface ButtonColorProps extends TouchableOpacityProps {
    dColor: boolean;
}

export const Container = styled.View`
    flex: 1;
`;
export const ContentLogo = styled.View`
    flex: 2;
    height: 300px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
`;
export const Content = styled.View`
    flex: 1;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;
export const TextContainer = styled.View`
    margin: 32px 32px 16px 32px;
`;
export const AreaButton = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin: 32px 32px 32px 32px;
`;
export const Button = styled.TouchableOpacity<ButtonColorProps>`
    width: 130px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background-color: ${({ theme, dColor }) =>
        dColor ? theme.COLORS.PRIMARY : theme.COLORS.HIGHLIGHT}50;
`;
