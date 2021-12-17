import Handler from "./protocol/Handler";
import Reader from "./protocol/Reader";
import Screen from "./components/Screen";
import React, { ReactNode } from "react";
import GameSettingsScreen from "./components/GameSettingsScreen";
import GameBoardScreen from "./components/GameBoardScreen";
import Board from "./boards/Board";
import BoardComponent from "./components/BoardComponent";
import BoardPosition from "./boards/BoardPosition";
import StartScreen from "./components/StartScreen";
import RoomCard from "./cards/RoomCard";
import DetectiveNotes from "./notes/DetectiveNotes";
import CardType from "./cards/CardType";
import Util from "./Util";
import Card from "./cards/Card";
import NoteSection from "./notes/NoteSection";

export default class NoClue {
    private static instance: NoClue;
    private screen: Screen;
    private gameBoardScreen: GameBoardScreen;
    private board: Board = new Board();
    private connectionHandler: Handler = null;
    private playerId: number;
    private boardscreen: BoardComponent;
    private notes: DetectiveNotes = new DetectiveNotes();

    public constructor() {
        NoClue.instance = this;
    }

    public static getInstance(): NoClue {
        return NoClue.instance;
    }

    public getScreen(): ReactNode {
        return <Screen defaultDisplay={<StartScreen />} ref={screen => this.screen = screen} />;
    }

    public setBoardScreen(board: BoardComponent): void {
        this.boardscreen = board;
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

    public sendSelectedBoardPosition(position: BoardPosition): void {
        if (!this.board.isValidPosition(position)) {
            return;
        }

        this.connectionHandler.sendMessage(new Uint8Array([0, 0, 0, 10, 0, 0, 0, position.getX(), 0, 0, 0, position.getY()]));
    }

    public getNotes(): DetectiveNotes {
        return this.notes;
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
        if (id == 9) {
            this.showSpaces(reader);
        }
        if (id == 11) {
            this.disableCellSelection(reader);
        }
        if (id == 12) {
            this.highlightSelectedSpace(reader);
        }
        if (id == 13) {
            this.movePlayerToSpace(reader);
        }
        if (id == 16) {
            this.showCardScreen(reader);
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
        this.screen.setActiveDisplay(<GameBoardScreen board={this.board} ref={(gameBoardScreen => this.gameBoardScreen = gameBoardScreen)} />);
    }

    private showCardScreen(reader: Reader): void {
        let roomType: number = reader.readInt();
        this.gameBoardScreen.enableCardSelectionScreen(RoomCard.byId(roomType));
    }

    private readCard(reader: Reader): void {
        let type: CardType = reader.readInt();
        let value: number = reader.readInt();
        let card: Card = Util.getCard(type, value);
        let section: NoteSection = this.notes.getSectionByCard(card);
        section.get(card).setInvalidated(true);
        this.gameBoardScreen.addCard(card);
    }

    private allowDice(): void {
        console.log("Allow dice to be rolled");
    }

    private showDiceRoll(reader: Reader): void {
        console.log(`First Roll: ${reader.readInt()}, Second Roll: ${reader.readInt()}`);
    }

    private showSpaces(reader: Reader): void {
        let length: number = reader.readInt();
        for (let i: number = 0; i < length; i++) {
            let x: number = reader.readInt();
            let y: number = reader.readInt();
            this.board.get(x, y).highlight();
        }
        this.boardscreen.refresh();
    }

    private disableCellSelection(reader: Reader): void {
        if (reader.readBoolean()) {
            this.board.hideAll();
            this.boardscreen.refresh();
        }
    }

    private highlightSelectedSpace(reader: Reader): void {
        let x: number = reader.readInt();
        let y: number = reader.readInt();
        this.board.get(x, y).blink();
    }

    private movePlayerToSpace(reader: Reader): void {
        this.connectionHandler.sendMessage(new Uint8Array([0, 0, 0, 14]));
    }
}
