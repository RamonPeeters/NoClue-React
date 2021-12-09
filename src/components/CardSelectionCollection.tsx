import React, { Component, ReactNode } from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import Card from "../cards/Card";
import FancyText from "./FancyText";

interface Props {
    items: Card[];
    title: string;
    onPress(card: Card): void;
}

interface State {}

export default class CardSelectionCollection extends Component<Props, State> {
    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <FancyText text={this.props.title} size={24}></FancyText>
                <FlatList
                    numColumns={3}
                    data={this.props.items}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                    renderItem={(pair) => {
                        return (
                            <Pressable onPress={() => {this.props.onPress(pair.item)}}>
                                <Image style={STYLES.image} source={pair.item.getImageSource()}></Image>
                            </Pressable>
                        );
                    }}
                />
            </View>
        )
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    image: {
        margin: 5
    }
});
