import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Handler from '../src/protocol/Handler';
import Reader from '../src/protocol/Reader';
import StartScreen from './StartScreen';

export default class Screen extends Component {
    private handler: Handler = null;
    state = { activeDisplay: null };

    constructor(props: any) {
        super(props);
        this.setDefaultScreen();
    }

    public render(): Component {
        return this.state.activeDisplay;
    }

    private setDefaultScreen(): void {
        this.state.activeDisplay = <StartScreen createLobby={() => this.createLobby()} />;
    }

    private createLobby() {
        this.handler = new Handler(new WebSocket("ws://localhost:19772/game"), (reader) => this.receiveMessage(reader));
    }

    private receiveMessage(reader: Reader) {
        let id = reader.readInt();
        if (id === 1) {
            this.lobbyCreated(reader);
        }
        if (id === 2) {
            console.log("JOIN THE LOBBY");
        }
    }

    private lobbyCreated(reader: Reader): void {
        if (reader.readBoolean()) {
            let code = reader.readInt();
            this.setState({
                activeDisplay: <View><Text>{code}</Text></View>
            });
        } else {
            console.log("was not able to create a lobby");
        }
    }
}
