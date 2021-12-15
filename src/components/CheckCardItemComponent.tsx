import React, { Component, ReactNode } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CheckComponent from "./CheckComponent";
import FancyText from "./FancyText";
import FancyTitle from "./FancyTitle";

interface Props {
    title: string;
    items: string[];
}

interface State {}

export default class CheckCardItemComponent extends Component<Props, State> {
    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <FancyText size={20} text={this.props.title}></FancyText>
                <FlatList
                    data={this.props.items}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                    renderItem={(pair) => {
                        return (
                            <CheckComponent name={pair.item}></CheckComponent>
                        );
                    }}
                />
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        backgroundColor: "pink"
    }
});
