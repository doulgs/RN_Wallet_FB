import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import Icons from "../../assets/Icons";
import { Text } from "../Text";

import {
    Badges,
    Container,
    Content,
    ContentActions,
    ContentIcon,
    ImageUser,
} from "./styles";

interface HeaderProps {
    badges?: number | null;
}

const Header: React.FC<HeaderProps> = ({ badges }) => {
    const { COLORS } = useTheme();

    return (
        <Container>
            <Content>
                <Text weight="800" size={27} color={COLORS.WHITE}>
                    Great
                    <Text weight="500" size={25} color={COLORS.PRIMARY}>
                        Bank
                    </Text>
                </Text>
            </Content>

            <ContentActions>
                <ContentIcon>
                    {badges === undefined ? null : (
                        <Badges>
                            <Text size={10} color={COLORS.BACKGROUND}>
                                {badges}
                            </Text>
                        </Badges>
                    )}
                    <Icons fill={COLORS.WHITE} size={25} name="Bell" />
                </ContentIcon>
                <ContentIcon>
                    <ImageUser
                        source={require("../../assets/UserProfile.jpeg")}
                    />
                </ContentIcon>
            </ContentActions>
        </Container>
    );
};

export default Header;
