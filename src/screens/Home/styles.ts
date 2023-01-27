import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;
export const ContentContainer = styled.View``;

export const FooterContainer = styled.View`
    flex: 2;
    align-items: center;
    margin-top: 140px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;

    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
`;
