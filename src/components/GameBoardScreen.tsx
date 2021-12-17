import React, { Component, ReactNode } from "react";
import { Button, StyleSheet, View } from "react-native";
import Card from "../cards/Card";
import NoClue from "../NoClue";
import Handler from "../protocol/Handler";
import BoardComponent from "./BoardComponent";
import CardCollection from "./CardCollection";
import MenuBarComponent from "./MenuBarComponent";
import CardSelectionScreen from './CardSelectionScreen';
import Board from "../boards/Board";
import Screen from "./Screen";
import RoomCard from "../cards/RoomCard";
import DetectiveNotesComponent from "./notes/DetectiveNotesComponent";

interface Props {
    board: Board;
}

interface State {}

export default class GameBoardScreen extends Component<Props, State> {
    private screen: Screen;
    private cardCollection: CardCollection;

    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <MenuBarComponent></MenuBarComponent>
                <Button onPress={() => this.rollDice()} title="Roll dice"></Button>
                <View style={STYLES.gameDisplayContainer}>
                    <View style={STYLES.boardContainer}>
                        <Screen defaultDisplay={<BoardComponent ref={(board) => NoClue.getInstance().setBoardScreen(board)}></BoardComponent>} ref={(screen) => this.screen = screen} ></Screen>
                    </View>
                    <DetectiveNotesComponent></DetectiveNotesComponent>
                </View>
                <CardCollection ref={(cardCollection) => this.cardCollection = cardCollection}></CardCollection>
            </View>
        );
    }

    public enableCardSelectionScreen(roomType: RoomCard): void {
        this.screen.setActiveDisplay(<CardSelectionScreen roomType={roomType} />);
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
    gameDisplayContainer: {
        flex: 1,
        flexDirection: "row"
    },
    boardContainer: {
        backgroundColor: "orange",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
