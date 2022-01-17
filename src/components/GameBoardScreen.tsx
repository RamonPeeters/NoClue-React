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
import DiceSetComponent from "./dice/DiceSetComponent";
import DiceSet from "../dice/DiceSet";

interface Props {
    board: Board;
}

interface State {}

export default class GameBoardScreen extends Component<Props, State> {
    private screen: Screen;
    private cardCollection: CardCollection;
    private enabledDice: boolean;
    private diceSet: DiceSet = new DiceSet(4, 3);

    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <MenuBarComponent></MenuBarComponent>
                <View style={STYLES.gameDisplayContainer}>
                    <View style={STYLES.boardContainer}>
                        <View style={STYLES.boardScreenContainer}>
                            <Screen defaultDisplay={<BoardComponent ref={(board) => NoClue.getInstance().setBoardScreen(board)}></BoardComponent>} ref={(screen) => this.screen = screen} ></Screen>
                        </View>
                        {this.enabledDice &&
                            <View style={STYLES.diceOverlay}>
                                <DiceSetComponent diceSet={this.diceSet} onPress={() => this.rollDice()}></DiceSetComponent>
                            </View>
                        }
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

    public enableDefaultBoardScreen(): void {
        this.screen.setDefaultDisplay();
    }

    public addCard(card: Card): void {
        this.cardCollection.addCard(card);
        this.setState({});
    }

    public enableDice(): void {
        this.enabledDice = true;
        this.setState({});
    }

    public disableDice(): void {
        this.enabledDice = false;
        this.setState({});
    }

    public rolledDice(diceSet: DiceSet): void {
        //this.enabledDice = false;
        this.diceSet = diceSet;
        this.setState({});
        setTimeout(() => this.disableDice(), 3000);
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
        flex: 1
    },
    boardScreenContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    diceOverlay: {
        backgroundColor: "#00000040",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center"
    }
});
