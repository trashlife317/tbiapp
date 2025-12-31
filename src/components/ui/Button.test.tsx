import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';
import React from 'react';

// Mock animation
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return {
    ...Reanimated,
    useSharedValue: jest.fn(() => ({ value: 1 })),
    useAnimatedStyle: jest.fn(() => ({})),
    createAnimatedComponent: (component: any) => component,
  };
});

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button title="Test Button" />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Press Me" onPress={onPressMock} />);

    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
