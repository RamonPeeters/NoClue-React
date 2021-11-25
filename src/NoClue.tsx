import Handler from "./protocol/Handler";
import Reader from "./protocol/Reader";
import Screen from "./components/Screen";
import React, { ReactNode } from "react";
import GameSettingsScreen from "./components/GameSettingsScreen";
import GameBoardScreen from "./components/GameBoardScreen";
import Card from "./cards/Card";
import Board from "./boards/Board";

export default class NoClue {
    private static instance: NoClue;
    private screen: Screen;
    private gameBoardScreen: GameBoardScreen;
    private board: Board = new Board();
    private connectionHandler: Handler = null;
    private playerId: number;

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

    public getBoard(): Board {
        return this.board;
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
        if (id == 6) {
            this.allowDice();
        }
        if (id == 8) {
            this.showDiceRoll(reader);
        }
    }

    private lobbyCreated(reader: Reader): void {
        if (reader.readBoolean()) {
            let code = reader.readInt();
            this.screen.setActiveDisplay((
                <GameSettingsScreen code={code}></GameSettingsScreen>
            ));
            this.playerId = reader.readInt();
        } else {
            console.log("was not able to create a lobby");
        }
    }

    private gameStarted(): void {
        this.screen.setActiveDisplay(<GameBoardScreen ref={(gameBoardScreen => this.gameBoardScreen = gameBoardScreen)} />);
    }

    private readCard(reader: Reader): void {
        let card: Card = new Card(reader.readInt(), reader.readInt());
        this.gameBoardScreen.addCard(card);
    }

    private allowDice(): void {
        console.log("Allow dice to be rolled");
    }

    private showDiceRoll(reader: Reader): void {
        console.log(`First Roll: ${reader.readInt()}, Second Roll: ${reader.readInt()}`);
    }
}
