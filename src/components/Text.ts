import styled from "styled-components/native";

interface TextProps {
    weight?: "500" | "600" | "700" | "800" | "900";
    color?: string;
    size?: number;
    opacity?: number;
}

export const Text = styled.Text<TextProps>`
    font-family: ${({ weight }) => (weight ? `Lufga-${weight}` : "Lufga-500")};
    color: ${({ color }) => color || "#333"};
    font-size: ${({ size }) => (size ? `${size}px` : "16px")};
    opacity: ${({ opacity }) => opacity || 1};
`;
