import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import FancyText from './FancyText';

interface Props {
    text: string;
}

interface State {}

export default class FancyTitle extends Component<Props, State> {
    render() {
        return (
            <FancyText text={this.props.text} size={32}></FancyText>
        );
    }
}
