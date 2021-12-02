import React, { Component, ReactNode } from 'react';
import StartScreen from './StartScreen';

interface Props {}

interface State {
    activeDisplay: ReactNode
}

export default class Screen extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            activeDisplay: <StartScreen />
        }
    }

    public render(): ReactNode {
        return this.state.activeDisplay;
    }

    public refresh(): void {
        this.setState({});
    }

    public setActiveDisplay(display: ReactNode) {
        this.setState({
            activeDisplay: display
        });
    }
}
