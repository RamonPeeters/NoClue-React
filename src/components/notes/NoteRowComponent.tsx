import React, { Component, ReactNode } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Note from "../../notes/Note";
import NoteRow from "../../notes/NoteRow";
import NoteComponent from "./NoteComponent";

interface Props {
    name: string;
    note: NoteRow;
    onPressItem(note: Note): void;
}

interface State {}

export default class NoteRowComponent extends Component<Props, State> {
    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <View style={STYLES.titleContainer}>
                    <Text>{this.props.name}</Text>
                </View>
                <FlatList
                    numColumns={5}
                    data={[1, 2, 3, 4, 5]}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                    renderItem={(pair) => {
                        let note: Note = this.props.note.getOrCreateNote(pair.item);
                        return (
                            <NoteComponent onPress={(note) => this.props.onPressItem(note)} note={note}></NoteComponent>
                        );
                    }}
                ></FlatList>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    titleContainer: {
        justifyContent: "center",
        flexGrow: 1,
        paddingHorizontal: 10,
        borderColor: "#000000",
        borderWidth: 1
    }
});
