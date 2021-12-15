import React, { Component, ReactNode } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CheckCardCheckbox from "./CheckCardCheckbox";

interface Props {
    name: string;
    onPressItem(): void;
}

interface State {}

export default class CheckComponent extends Component<Props, State> {
    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <View style={STYLES.titleContainer}>
                    <Text>{this.props.name}</Text>
                </View>
                <FlatList
                    numColumns={6}
                    data={[1, 2, 3, 4, 5, 6]}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                    renderItem={(pair) => {
                        return (
                            <CheckCardCheckbox onPress={() => this.props.onPressItem()}></CheckCardCheckbox>
                        );
                    }}
                ></FlatList>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    titleContainer: {
        justifyContent: "center",
        flexGrow: 1,
        paddingHorizontal: 10,
        borderColor: "#000000",
        borderWidth: 1
    }
});
