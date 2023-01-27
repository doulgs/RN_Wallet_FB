import React from "react";
import { TouchableOpacity, View } from "react-native";
import { formatCurrency } from "../../utils/formatCurrency";
import { Text } from "../Text";

import { Container, CardHeader, CardFooter } from "./styles";

const CardBalance: React.FC = () => {
    return (
        <Container>
            <CardHeader>
                <Text>Account Balance</Text>
                <Text>{formatCurrency(223511)}</Text>
                <TouchableOpacity></TouchableOpacity>
            </CardHeader>
            <CardFooter></CardFooter>
        </Container>
    );
};

export default CardBalance;
