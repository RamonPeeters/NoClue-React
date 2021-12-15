import React, { Component, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import CheckCardItemComponent from "./CheckCardItemComponent";

export default class CheckCardComponent extends Component {
    private enabledMenu: boolean = false;
    
    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <CheckCardItemComponent title={"Suspects"} items={["Red", "Yellow", "Green", "Cyan", "Purple", "White"]} onPressItem={() => this.enableMenu()}></CheckCardItemComponent>
                <CheckCardItemComponent title={"Weapons"} items={["Revolver", "Dagger", "Lead Pipe", "Rope", "Candlestick", "Wrench"]} onPressItem={() => this.enableMenu()}></CheckCardItemComponent>
                <CheckCardItemComponent title={"Rooms"} items={["Hall", "Lounge", "Dining Room", "Kitchen", "Ballroom", "Conservatory", "Billiard Room", "Library", "Study"]} onPressItem={() => this.enableMenu()}></CheckCardItemComponent>
                {this.enabledMenu &&
                    <View style={STYLES.overlayContainer}>
                        <View style={STYLES.item}></View>
                    </View>
                }
            </View>
        );
    }

    private enableMenu(): void {
        this.enabledMenu = true;
        this.setState({});
    }
}

const STYLES = StyleSheet.create({
    container: {
        backgroundColor: "pink"
    },
    overlayContainer: {
        backgroundColor: "#00000040",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    item: {
        backgroundColor: "cyan",
        padding: 25
    }
});
