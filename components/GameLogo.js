import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class GameLogo extends Component {
    render() {
        return (
            <View style={[this.props.style, STYLES.container]}>
                <Text>logo</Text>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        backgroundColor: "green",
        padding: 5
    }
});
