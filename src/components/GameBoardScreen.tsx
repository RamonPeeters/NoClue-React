import React, { Component, ReactNode } from "react";
import { Button, Text, View } from "react-native";
import NoClue from "../NoClue";
import Handler from "../protocol/Handler";

export default class GameBoardScreen extends Component {
    public render(): ReactNode {
        return (
            <View>
                <Text>game board</Text>
                <Button onPress={() => this.rollDice()} title="Roll dice"></Button>
            </View>
        )
    }

    private rollDice(): void {
        let connectionHandler: Handler = NoClue.getInstance().getConnectionHandler();
        connectionHandler.sendMessage(new Uint8Array([0, 0, 0, 7]));
    }
}
