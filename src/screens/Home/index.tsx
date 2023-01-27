import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import CardBalance from "../../components/CardBalance";

import Header from "../../components/Header";
import { Text } from "../../components/Text";
import { Container, ContentContainer, FooterContainer } from "./styles";

const Home: React.FC = () => {
    const { COLORS } = useTheme();
    return (
        <Container>
            <ContentContainer>
                <Header badges={2} />
                <Text
                    color={COLORS.GRAY}
                    size={16}
                    style={{ marginHorizontal: 32 }}
                >
                    Olá, Boa noite
                </Text>
                <Text
                    color={COLORS.WHITE}
                    size={24}
                    style={{ marginHorizontal: 32 }}
                >
                    Douglas Domiciano
                </Text>
            </ContentContainer>

            <CardBalance />

            <FooterContainer></FooterContainer>
        </Container>
    );
};

export default Home;
