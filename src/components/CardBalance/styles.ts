import styled from "styled-components/native";

export const Container = styled.View`
    z-index: 9;
    width: 85%;
    height: 200px;
    border-radius: 16px;

    position: absolute;
    left: 32px;
    top: 200px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const CardHeader = styled.View`
    flex: 1;
`;

export const CardFooter = styled.View`
    flex: 1;
    border-top-width: 1px;
    border-top-color: ${({ theme }) => theme.COLORS.GRAY}40;
`;
