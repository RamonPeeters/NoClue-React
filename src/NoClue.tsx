import Handler from "./protocol/Handler";
import Reader from "./protocol/Reader";
import Screen from "./components/Screen";
import React, { ReactNode } from "react";
import GameSettingsScreen from "./components/GameSettingsScreen";
import GameBoardScreen from "./components/GameBoardScreen";

export default class NoClue {
    private static instance: NoClue;
    private screen: Screen;
    private connectionHandler: Handler = null;

    public constructor() {
        NoClue.instance = this;
    }

    public static getInstance(): NoClue {
        return NoClue.instance;
    }

    public getScreen(): ReactNode {
        return <Screen ref={screen => this.screen = screen} />;
    }

    public getConnectionHandler(): Handler {
        return this.connectionHandler;
    }

    public createLobby(): void {
        this.connectionHandler = new Handler(new WebSocket("ws://localhost:19772/game"), (reader) => this.receiveMessage(reader));
    }

    private receiveMessage(reader: Reader) {
        let id: number = reader.readInt();
        console.log("Received ID:", id);
        if (id == 0) {
            this.lobbyCreated(reader);
        }
        if (id == 4) {
            this.gameStarted();
        }
        if (id == 5) {
            this.readCard(reader);
        }
    }

    private lobbyCreated(reader: Reader): void {
        if (reader.readBoolean()) {
            let code = reader.readInt();
            this.screen.setActiveDisplay((
                <GameSettingsScreen code={code}></GameSettingsScreen>
            ));
        } else {
            console.log("was not able to create a lobby");
        }
    }

    private gameStarted(): void {
        this.screen.setActiveDisplay(<GameBoardScreen/>);
    }

    private readCard(reader: Reader): void {
        console.log(`Card Type: ${reader.readInt()}, Card Value: ${reader.readInt()}`);
    }
}
