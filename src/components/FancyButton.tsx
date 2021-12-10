import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import FancyText from './FancyText';

interface Props {
    text: string;
    onPress(): void;
}

interface State {}

export default class FancyButton extends Component<Props, State> {
    render() {
        return (
            <Pressable style={[STYLES.button]} onPress={() => this.props.onPress()}>
                <View style={[STYLES.buttonSide, STYLES.buttonTop]}></View>
                <View style={STYLES.buttonContent}>
                    <FancyText text={this.props.text}></FancyText>
                </View>
                <View style={[STYLES.buttonSide, STYLES.buttonBottom]}></View>
            </Pressable>
        );
    }
}

const STYLES = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#3B8526"
    },
    buttonSide: {
        width: "100%",
        paddingVertical: 2
    },
    buttonTop: {
        backgroundColor: "#6BC349"
    },
    buttonBottom: {
        backgroundColor: "#2A631C"
    },
    buttonContent: {
        marginVertical: 8,
        marginHorizontal: 100
    }
});
