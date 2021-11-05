import React, { Component, ReactNode } from "react";
import { Button, Text, View } from "react-native";
import NoClue from "../NoClue";
import Handler from "../protocol/Handler";

interface Props {
    code: number
}

interface State {}

export default class GameSettingsScreen extends Component<Props, State> {
    public render(): ReactNode {
        return (
            <View>
                <Text>Code: {this.props.code}</Text>
                <Button onPress={() => this.startGame()} title="Start" />
            </View>
        )
    }

    private startGame(): void {
        let connectionHandler: Handler = NoClue.getInstance().getConnectionHandler();
        connectionHandler.sendMessage(new Uint8Array([0, 0, 0, 3]));
    }
}
