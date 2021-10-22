import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import GameLogo from './GameLogo';
import CreateLobby from './CreateLobby';
import JoinLobby from './JoinLobby';

export default class StartScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={STYLES.container}>
                <GameLogo style={STYLES.logoContainer}></GameLogo>
                <View style={STYLES.lobbyContainer}>
                    <CreateLobby onConfirm={this.props.createLobby} style={[STYLES.lobbyItem, { height: "45%" }]}></CreateLobby>
                    <JoinLobby style={STYLES.lobbyItem}></JoinLobby>
                </View>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    },
    logoContainer: {
        flex: 35
    },
    lobbyContainer: {
        flex: 65,
        flexDirection: "row"
    },
    lobbyItem: {
        flex: 1,
        margin: 5
    }
});
