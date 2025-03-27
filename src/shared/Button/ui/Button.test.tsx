import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { ButtonTheme } from '../types/ButtonTheme';

describe('Button UI Testing', () => {
    test('Button test clear className', () => {
        render(<Button buttonTheme={ButtonTheme.CLEAR}>TEST</Button>);

        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
    test('Button test buttonPrimary className', () => {
        render(<Button buttonTheme={ButtonTheme.BUTTON_PRIMARY}>TEST</Button>);

        expect(screen.getByText('TEST')).toHaveClass('buttonPrimary');
    });
    test('Button test buttonSecondary className', () => {
        render(
            <Button buttonTheme={ButtonTheme.BUTTON_SECONDARY}>TEST</Button>,
        );

        expect(screen.getByText('TEST')).toHaveClass('buttonSecondary');
    });
});
