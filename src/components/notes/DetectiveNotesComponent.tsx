import React, { Component, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import NoClue from "../../NoClue";
import DetectiveNotes from "../../notes/DetectiveNotes";
import Note from "../../notes/Note";
import NoteSectionComponent from "./NoteSectionComponent";
import DetectiveNotesOverlayComponent from "./DetectiveNotesOverlayComponent";

export default class DetectiveNotesComponent extends Component {
    private enabledMenu: boolean = false;
    private selectedNote: Note = null;
    
    public render(): ReactNode {
        let notes: DetectiveNotes = NoClue.getInstance().getNotes();

        return (
            <View style={STYLES.container}>
                <NoteSectionComponent title={"Suspects"} notes={notes.getSuspectNotes()} onPressItem={(note) => this.enableMenu(note)}></NoteSectionComponent>
                <NoteSectionComponent title={"Weapons"} notes={notes.getWeaponNotes()} onPressItem={(note) => this.enableMenu(note)}></NoteSectionComponent>
                <NoteSectionComponent title={"Rooms"} notes={notes.getRoomNotes()} onPressItem={(note) => this.enableMenu(note)}></NoteSectionComponent>
                {this.enabledMenu &&
                    <View style={STYLES.overlayContainer}>
                        <DetectiveNotesOverlayComponent note={this.selectedNote} onConfirm={() => this.disableMenu()}></DetectiveNotesOverlayComponent>
                    </View>
                }
            </View>
        );
    }

    private enableMenu(note: Note): void {
        this.enabledMenu = true;
        this.selectedNote = note;
        this.setState({});
    }

    private disableMenu() {
        this.enabledMenu = false;
        this.selectedNote = null;
        this.setState({});
    }
}

const STYLES = StyleSheet.create({
    container: {
        backgroundColor: "pink"
    },
    overlayContainer: {
        backgroundColor: "#00000040",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    item: {
        backgroundColor: "cyan",
        padding: 25
    }
});
