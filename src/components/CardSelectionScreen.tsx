import React, { Component, ReactNode } from "react";
import { FlatList, Image, ImageURISource, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import CardSelectionCollection from "./CardSelectionCollection";
import FancyButton from "./FancyButton";
import FancyTitle from "./FancyTitle";

interface Props {
    roomType: number;
}

interface State {}

export default class CardSelectionScreen extends Component<Props, State> {
    private static readonly IMAGES: ImageURISource[] = [
        require("../assets/cards/suspects/red.png"),
        require("../assets/cards/suspects/green.png"),
        require("../assets/cards/suspects/yellow.png"),
        require("../assets/cards/suspects/purple.png"),
        require("../assets/cards/suspects/cyan.png"),
        require("../assets/cards/suspects/white.png")
    ]

    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <FancyTitle text={"Choose..."}></FancyTitle>
                <View style={STYLES.cardContainer}>
                    <CardSelectionCollection title={"Suspect"} items={CardSelectionScreen.IMAGES} onPress={(card) => this.selectSuspect(card)}></CardSelectionCollection>
                    <CardSelectionCollection title={"Weapon"} items={CardSelectionScreen.IMAGES} onPress={(card) => this.selectSuspect(card)}></CardSelectionCollection>
                </View>
                <View style={STYLES.displayCardContainer}>
                    <Image style={STYLES.image} source={this.image}></Image>
                    <Image style={STYLES.image} source={this.image}></Image>
                    <Image style={STYLES.image} source={this.image}></Image>
                </View>
                <View>
                    <FancyButton text={"Confirm"}></FancyButton>
                </View>
            </View>
        )
    }

    private image: ImageURISource = require("../assets/cards/card.png");

    private selectSuspect(image: ImageURISource): void {
        this.image = image;
        this.setState({});
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginVertical: 10
    },
    cardContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-evenly"
    },
    displayCardContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    image: {
        marginVertical: 10,
        marginHorizontal: 5
    }
});
