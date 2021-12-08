import React, { Component, ReactNode } from "react";
import { FlatList, Image, ImageURISource, Pressable, StyleSheet, View } from "react-native";
import FancyText from "./FancyText";

interface Props {
    items: ImageURISource[];
    title: string;
    onPress(image: ImageURISource): void;
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
                                <Image style={STYLES.image} source={pair.item}></Image>
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
