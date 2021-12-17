import React, { Component, ReactNode } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Note from "../../notes/Note";
import NoteSection from "../../notes/NoteSection";
import NoteRowComponent from "./NoteRowComponent";
import FancyText from "../FancyText";

interface Props {
    title: string;
    notes: NoteSection;
    onPressItem(note: Note): void;
}

interface State {}

export default class NoteSectionComponent extends Component<Props, State> {
    public render(): ReactNode {
        return (
            <View style={STYLES.container}>
                <FancyText size={20} text={this.props.title}></FancyText>
                <FlatList
                    data={this.props.notes.getKeys()}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                    renderItem={(pair) => {
                        return (
                            <NoteRowComponent onPressItem={(note) => this.props.onPressItem(note)} name={pair.item.getName()} note={this.props.notes.get(pair.item)}></NoteRowComponent>
                        );
                    }}
                />
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        backgroundColor: "pink"
    }
});
