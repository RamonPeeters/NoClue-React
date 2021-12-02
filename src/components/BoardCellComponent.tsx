import React, { Component, ReactNode } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import BoardPosition from "../boards/BoardPosition";
import NoClue from "../NoClue";

interface Props {
    backgroundColour: string
    position: BoardPosition
}

interface State {}

export default class BoardCellComponent extends Component<Props, State> {
    public render(): ReactNode {
        return (
            <TouchableWithoutFeedback onPress={() => this.pressed()}>
                <View style={[STYLES.container, {backgroundColor: this.props.backgroundColour}]}></View>
            </TouchableWithoutFeedback>
        );
    }

    private pressed(): void {
        NoClue.getInstance().sendSelectedBoardPosition(this.props.position);
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        aspectRatio: 1
    }
});
