import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GoBackHeader} from '../GoBackHeader';
jest.mock('../../../assets/back.png');
describe('GoBackHeader', () => {
  it('should call onGoBack when pressed', () => {
    const onGoBack = jest.fn();

    const {getByTestId} = render(<GoBackHeader onGoBack={onGoBack} />, {
      wrapper: SafeAreaProvider,
    });
    const button = getByTestId('goBackButton');
    expect(button).toBeTruthy();
    fireEvent.press(button);
    expect(onGoBack).toBeCalledTimes(1);
  });
});
