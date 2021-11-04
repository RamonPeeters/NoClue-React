import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class JoinLobby extends Component {
    render() {
        return (
            <View style={[this.props.style, STYLES.container]}>
                <Text>join</Text>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        padding: 5
    }
});
