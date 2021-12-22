import React, { Component, ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";
import DiceSet from "../../dice/DiceSet";
import DieComponent from "./DieComponent";

interface Props {
    diceSet: DiceSet;
    onPress(): void;
}

export default class DiceSetComponent extends Component<Props> {
    public render(): ReactNode {
        return (
            <Pressable style={STYLES.container} onPress={() => this.props.onPress()}>
                <DieComponent style={STYLES.die} value={this.props.diceSet.getFirstRoll()}></DieComponent>
                <DieComponent style={STYLES.die} value={this.props.diceSet.getSecondRoll()}></DieComponent>
            </Pressable>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center"
    },
    die: {
        marginVertical: 10,
        marginHorizontal: 5
    }
});
