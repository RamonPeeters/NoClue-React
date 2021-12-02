import React, { Component, ReactNode } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BoardPosition from "../boards/BoardPosition";
import NoClue from "../NoClue";
import BoardCellComponent from "./BoardCellComponent";

export default class BoardComponent extends Component {
    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <FlatList
                numColumns={12}
                data={NoClue.getInstance().getBoard().getCells()}
                keyExtractor={(item, index) => {
                    return index.toString();
                }}
                renderItem={(pair) => {
                    return (
                        <BoardCellComponent position={new BoardPosition(pair.index % 12, Math.floor(pair.index / 12))} backgroundColour={pair.item.getBackgroundColour()}></BoardCellComponent>
                    );
                }}
            />
            </View>
        );
    }

    public refresh(): void {
        this.setState({});
    }
}

const STYLES = StyleSheet.create({
    container: {
        width: "25%",
        aspectRatio: 1
    }
});
