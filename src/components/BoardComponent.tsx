import React, { Component, ReactNode } from "react";
import { FlatList, StyleSheet, View } from "react-native";
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
                        <BoardCellComponent backgroundColour={pair.item.getBackgroundColour()}></BoardCellComponent>
                    );
                }}
            />
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        width: "25%",
        aspectRatio: 1
    }
});
