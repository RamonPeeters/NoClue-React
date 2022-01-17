import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import DieComponent from '../../../src/components/dice/DieComponent';

it('renders correct image for die value 1', () => {
    const dieComponent = renderer.create(<DieComponent value={1} />);
    expect(dieComponent).toMatchSnapshot();
});

it('renders correct image for die value 2', () => {
    const dieComponent = renderer.create(<DieComponent value={1} />);
    expect(dieComponent).toMatchSnapshot();
});

it('renders correct image for die value 3', () => {
    const dieComponent = renderer.create(<DieComponent value={2} />);
    expect(dieComponent).toMatchSnapshot();
});

it('renders correct image for die value 4', () => {
    const dieComponent = renderer.create(<DieComponent value={4} />);
    expect(dieComponent).toMatchSnapshot();
});

it('renders correct image for die value 5', () => {
    const dieComponent = renderer.create(<DieComponent value={5} />);
    expect(dieComponent).toMatchSnapshot();
});

it('renders correct image for die value 6', () => {
    const dieComponent = renderer.create(<DieComponent value={6} />);
    expect(dieComponent).toMatchSnapshot();
});

it('renders the default image for an invalid die value', () => {
    const dieComponent = renderer.create(<DieComponent value={-1} />);
    expect(dieComponent).toMatchSnapshot();
});
