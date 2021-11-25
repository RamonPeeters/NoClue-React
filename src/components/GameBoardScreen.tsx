import React, { Component, ReactNode } from "react";
import { Button, StyleSheet, View } from "react-native";
import Card from "../cards/Card";
import NoClue from "../NoClue";
import Handler from "../protocol/Handler";
import BoardComponent from "./BoardComponent";
import CardCollection from "./CardCollection";

export default class GameBoardScreen extends Component {
    private cardCollection: CardCollection;

    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <Button onPress={() => this.rollDice()} title="Roll dice"></Button>
                <View style={STYLES.boardContainer}>
                    <BoardComponent></BoardComponent>
                </View>
                <CardCollection ref={(cardCollection) => this.cardCollection = cardCollection}></CardCollection>
            </View>
        )
    }

    public addCard(card: Card): void {
        this.cardCollection.addCard(card);
    }

    private rollDice(): void {
        let connectionHandler: Handler = NoClue.getInstance().getConnectionHandler();
        connectionHandler.sendMessage(new Uint8Array([0, 0, 0, 7]));
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1
    },
    boardContainer: {
        backgroundColor: "orange",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
