import React, { Component, ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";

export default class CheckCardCheckbox extends Component {
    public render(): ReactNode {
        return (
            <Pressable style={STYLES.container}></Pressable>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        height: 28,
        aspectRatio: 1,
        borderColor: "#000000",
        borderWidth: 1
    }
});
