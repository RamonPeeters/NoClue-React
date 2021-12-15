import React, { Component, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import CheckCardItemComponent from "./CheckCardItemComponent";

export default class CheckCardComponent extends Component {
    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <CheckCardItemComponent title={"Suspects"} items={["Red", "Yellow", "Green", "Cyan", "Purple", "White"]}></CheckCardItemComponent>
                <CheckCardItemComponent title={"Weapons"} items={["Revolver", "Dagger", "Lead Pipe", "Rope", "Candlestick", "Wrench"]}></CheckCardItemComponent>
                <CheckCardItemComponent title={"Rooms"} items={["Hall", "Lounge", "Dining Room", "Kitchen", "Ballroom", "Conservatory", "Billiard Room", "Library", "Study"]}></CheckCardItemComponent>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        backgroundColor: "pink"
    }
});
