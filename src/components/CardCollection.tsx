import React, { Component, ReactNode } from "react";
import { View } from "react-native";
import Card from "../cards/Card";
import CardScreen from "./CardScreen";

export default class CardCollection extends Component {
    private readonly cards: ReactNode[] = [];

    public render(): ReactNode {
        return (
            <View style={{flexDirection: "row", justifyContent: "center"}}>
                {this.cards}
            </View>
        );
    }

    public addCard(card: Card): void {
        this.cards.push(<CardScreen cardType={card.getCardType()} cardValue={card.getCardValue()} ></CardScreen>);
        this.setState({});
    }
}
