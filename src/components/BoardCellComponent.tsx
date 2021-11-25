import React, { Component, ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface Props {
    backgroundColour: string
}

interface State {}

export default class BoardCellComponent extends Component<Props, State> {
    public render(): ReactNode {
        return (
            <View style={[STYLES.container, {backgroundColor: this.props.backgroundColour}]}></View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: "grey"
    }
});
