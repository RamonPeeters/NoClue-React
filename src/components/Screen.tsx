import React, { Component, ReactNode } from 'react';

interface Props {
    defaultDisplay: ReactNode
}

interface State {
    activeDisplay: ReactNode
}

export default class Screen extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            activeDisplay: this.props.defaultDisplay
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

    public setDefaultDisplay(): void {
        this.setState({
            activeDisplay: this.props.defaultDisplay
        });
    }
}
