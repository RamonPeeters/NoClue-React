import React, { Component, ReactNode } from 'react';
import { Button, Image, Text, TouchableWithoutFeedback, View } from 'react-native';

export default class MenuBarComponent extends Component {

    public render(): ReactNode {
        return (
            <View style={{flexDirection: "row-reverse"}}>
                <TouchableWithoutFeedback>
                    <Image source={require("../assets/menu_button.png")}></Image>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
