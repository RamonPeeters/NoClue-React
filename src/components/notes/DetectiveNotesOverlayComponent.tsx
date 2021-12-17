import React, { Component, ReactNode } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import Note from "../../notes/Note";

interface Props {
    note: Note;
    onConfirm(): void;
}

interface State {}

export default class DetectiveNotesOverlayComponent extends Component<Props, State> {
    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <Pressable onPress={() => this.props.onConfirm()}>
                    <Image source={require('../assets/buttons/exit_button.png')}></Image>
                </Pressable>
                <Pressable onPress={() => this.mark()}>
                    <Image source={require('../assets/buttons/mark_button.png')}></Image>
                </Pressable>
            </View>
        );
    }

    private mark(): void {
        this.props.note.toggleMarked();
        this.props.onConfirm();
    }
}

const STYLES = StyleSheet.create({
    container: {
        backgroundColor: "cyan",
        padding: 20
    }
});
