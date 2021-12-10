import React, { Component, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Card from "../cards/Card";
import RoomCard from "../cards/RoomCard";
import SuspectCard from "../cards/SuspectCard";
import WeaponCard from "../cards/WeaponCard";
import NoClue from "../NoClue";
import Handler from "../protocol/Handler";
import CardSelectionCollection from "./CardSelectionCollection";
import CardSuggestionComponent from "./CardSuggestionComponent";
import FancyButton from "./FancyButton";
import FancyTitle from "./FancyTitle";

interface Props {
    roomType: RoomCard;
}

interface State {}

export default class CardSelectionScreen extends Component<Props, State> {
    private selectedSuspect: SuspectCard = null;
    private selectedWeapon: WeaponCard = null;

    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <FancyTitle text={"Choose..."}></FancyTitle>
                <View style={STYLES.cardContainer}>
                    <CardSelectionCollection title={"Suspect"} items={SuspectCard.getValues()} onPress={(card) => this.selectSuspect(card)}></CardSelectionCollection>
                    <CardSelectionCollection title={"Weapon"} items={WeaponCard.getValues()} onPress={(card) => this.selectWeapon(card)}></CardSelectionCollection>
                </View>
                <CardSuggestionComponent suspectCard={this.selectedSuspect} weaponCard={this.selectedWeapon} roomCard={this.props.roomType}></CardSuggestionComponent>
                <View>
                    <FancyButton text={"Confirm"} onPress={() => this.confirmSelection()}></FancyButton>
                </View>
            </View>
        )
    }

    private selectSuspect(card: Card): void {
        this.selectedSuspect = card;
        this.setState({});
    }

    private selectWeapon(card: Card): void {
        this.selectedWeapon = card;
        this.setState({});
    }

    private confirmSelection(): void {
        if (this.selectedSuspect == null || this.selectedWeapon == null) {
            return;
        }
        let connectionHandler: Handler = NoClue.getInstance().getConnectionHandler();
        connectionHandler.sendMessage(new Uint8Array([0, 0, 0, 17, 0, 0, 0, this.selectedSuspect.getCardValue(), 0, 0, 0, this.selectedWeapon.getCardValue()]));
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
