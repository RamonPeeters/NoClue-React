import React, { Component, ReactNode } from "react";
import { Text, View } from "react-native";

interface Props {
    code: number
}

interface State {}

export default class GameSettingsScreen extends Component<Props, State> {
    public render(): ReactNode {
        return (
            <View>
                <Text>Code: {this.props.code}</Text>
            </View>
        )
    }
}
