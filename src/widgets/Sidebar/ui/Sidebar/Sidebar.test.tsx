import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { ComponentRender } from '@/shared/lib/renderWithRouter/renderWithRouter';

describe('Sidebar UI Testing', () => {
    test('Sidebar render', () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Sidebar check button is collapsed', () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const toggleButton = screen.getByTestId('sidebar-toggle');

        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
    test('Sidebar check button is not collapsed', () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const toggleButton = screen.getByTestId('sidebar-toggle');

        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
