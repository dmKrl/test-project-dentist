import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export interface renderWithRenderOptions {
    route?: string;
}

export function ComponentRender(
    component: ReactNode,
    options: renderWithRenderOptions = {},
) {
    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>,
    );
}
