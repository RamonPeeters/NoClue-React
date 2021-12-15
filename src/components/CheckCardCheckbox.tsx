import React, { Component, ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";

interface Props {
    onPress(): void;
}

interface State {}

export default class CheckCardCheckbox extends Component<Props, State> {
    public render(): ReactNode {
        return (
            <Pressable style={STYLES.container} onPress={() => this.props.onPress()}></Pressable>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        height: 28,
        aspectRatio: 1,
        borderColor: "#000000",
        borderWidth: 1
    }
});
