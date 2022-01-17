import React, { Component, ReactNode } from "react";
import { Image, ImageURISource, StyleProp, StyleSheet, ViewStyle } from "react-native";

interface Props {
    value: number;
    style?: StyleProp<ViewStyle>;
}

export default class DieComponent extends Component<Props> {
    private static readonly ONE: ImageURISource = require('../../assets/die/1.png');
    private static readonly TWO: ImageURISource = require('../../assets/die/2.png');
    private static readonly THREE: ImageURISource = require('../../assets/die/3.png');
    private static readonly FOUR: ImageURISource = require('../../assets/die/4.png');
    private static readonly FIVE: ImageURISource = require('../../assets/die/5.png');
    private static readonly SIX: ImageURISource = require('../../assets/die/6.png');

    public render(): ReactNode {
        return (
            <Image style={[STYLES.container, this.props.style]} source={DieComponent.getDieImage(this.props.value)}></Image>
        );
    }

    private static getDieImage(value: number): ImageURISource {
        switch (value) {
            case 1: {
                return DieComponent.ONE;
            }
            case 2: {
                return DieComponent.TWO;
            }
            case 3: {
                return DieComponent.THREE;
            }
            case 4: {
                return DieComponent.FOUR;
            }
            case 5: {
                return DieComponent.FIVE;
            }
            case 6:
            default: {
                return DieComponent.SIX;
            }
        }
    }
}

const STYLES = StyleSheet.create({
    container: {
    }
});
