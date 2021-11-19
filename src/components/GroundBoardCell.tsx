import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import BoardCell from "./BoardCell";

export default class GroundBoardCell extends BoardCell {
    public render(): ReactNode {
        return (
            <View style={STYLES.container}></View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        height: "8.33333333%",
        aspectRatio: 1,
        backgroundColor: "lightgrey"
    }
});
