import React, { Component, ReactNode } from "react";
import { Image, ImageURISource, StyleSheet, View } from "react-native";
import Card from "../cards/Card";
import RoomCard from "../cards/RoomCard";
import SuspectCard from "../cards/SuspectCard";
import WeaponCard from "../cards/WeaponCard";

interface Props {
    suspectCard: SuspectCard;
    weaponCard: WeaponCard;
    roomCard: RoomCard;
}

interface State {}

export default class CardSuggestionComponent extends Component<Props, State> {
    private static readonly BACKSIDE_CARD: ImageURISource = require('../assets/cards/card.png');

    public render(): ReactNode {
        return (
            <View style={STYLES.displayCardContainer}>
                <Image style={STYLES.image} source={CardSuggestionComponent.getImageOrDefault(this.props.suspectCard)}></Image>
                <Image style={STYLES.image} source={CardSuggestionComponent.getImageOrDefault(this.props.weaponCard)}></Image>
                <Image style={STYLES.image} source={CardSuggestionComponent.getImageOrDefault(this.props.roomCard)}></Image>
            </View>
        );
    }

    private static getImageOrDefault(card: Card): ImageURISource {
        return card?.getImageSource() ?? CardSuggestionComponent.BACKSIDE_CARD;
    }
}

const STYLES = StyleSheet.create({
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
