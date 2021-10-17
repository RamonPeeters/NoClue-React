import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CreateLobby extends Component {
    render() {
        return (
            <View style={[this.props.style, STYLES.container]}>
                <Text>create</Text>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        padding: 5
    }
});
