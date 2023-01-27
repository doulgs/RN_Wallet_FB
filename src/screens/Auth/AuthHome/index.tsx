import React from "react";

import {
    Container,
    Content,
    ContentLogo,
    TextContainer,
    AreaButton,
    Button,
} from "./styles";

import Logo from "../../../assets/Logo_DG.svg";
import { Text } from "../../../components/Text";

import { useNavigation } from "@react-navigation/native";

const AuthHome: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <ContentLogo>
                <Logo width={300} height={300} />
                <Text>Seven</Text>
                <Text>Bank</Text>
            </ContentLogo>

            <Content>
                <TextContainer>
                    <Text
                        color="#FFF"
                        weight="800"
                        size={40}
                        style={{ marginBottom: 32 }}
                    >
                        Bem Vindo
                    </Text>

                    <Text color="#FFF" weight="600" size={16}>
                        Monitore e organize seus gastos de qualquer lugar e de
                        forma simples e rapida
                    </Text>
                </TextContainer>

                <AreaButton>
                    <Button
                        dColor={true}
                        onPress={() => navigation.navigate("AuthSingIn")}
                    >
                        <Text color="#FFF">Acessar</Text>
                    </Button>

                    <Button
                        dColor={false}
                        onPress={() => navigation.navigate("AuthSingUp")}
                    >
                        <Text color="#FFF">Cadastrar</Text>
                    </Button>
                </AreaButton>
            </Content>
        </Container>
    );
};

export default AuthHome;
