import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class CreateLobby extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={[this.props.style, STYLES.container]}>
                <Text>create</Text>
                <Button onPress={() => this.props.onConfirm()} title="Create"></Button>
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
