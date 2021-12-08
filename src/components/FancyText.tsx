import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
    text: string;
    size?: number;
}

interface State {}

export default class FancyText extends Component<Props, State> {
    render() {
        return (
            <Text style={[STYLES.text, {fontSize: this.props.size}]}>{this.props.text}</Text>
        );
    }
}

const STYLES = StyleSheet.create({
    text: {
        color: "#FFFFFF",
        fontWeight: "bold"
    }
});
