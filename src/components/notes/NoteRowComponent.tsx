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
        let invalid: boolean = this.props.note.isInvalidated();
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
                            <NoteComponent onPress={(note) => this.props.onPressItem(note)} note={note} invalid={invalid}></NoteComponent>
                        );
                    }}
                ></FlatList>
                {invalid &&
                    <View style={STYLES.invalidatedContainer}>
                        <View style={STYLES.invalidatedLine}></View>
                    </View>
                }
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
    },
    invalidatedContainer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    invalidatedLine: {
        width: "95%",
        height: 2,
        backgroundColor: "red"
    }
});
