import React, { Component, ReactNode } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Note from "../../notes/Note";

interface Props {
    onPress(note: Note): void;
    note: Note;
}

interface State {}

export default class NoteComponent extends Component<Props, State> {
    public render(): ReactNode {
        let s: string = this.props.note.isMarked() ? "X" : "";
        return (
            <Pressable style={STYLES.container} onPress={() => this.props.onPress(this.props.note)}>
                <Text>{s}</Text>
            </Pressable>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        height: 28,
        aspectRatio: 1,
        borderColor: "#000000",
        borderWidth: 1
    }
});