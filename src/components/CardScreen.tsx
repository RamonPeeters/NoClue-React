import React, { Component, ReactNode } from "react";
import { Text, View } from "react-native";
import CardType from "../cards/CardType";

interface Props {
    cardType: CardType,
    cardValue: number
}

interface State {}

export default class CardScreen extends Component<Props, State> {
    public render(): ReactNode {
        return (
            <View style={{backgroundColor: "pink"}}>
                <Text>Type: {this.props.cardType}</Text>
                <Text>Value: {this.props.cardValue}</Text>
            </View>
        );
    }
}
