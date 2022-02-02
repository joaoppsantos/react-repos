import * as React from 'react';
import { render } from '@testing-library/react';
import { Repository } from '../Repository';

describe('<Repository />', () => {
    it('should render correctly', () => {
        const mockRepository = {
            forks: 10,
            stars: 15,
            url: 'www.mock-repository.com',
            name: 'React'
        }
        const { container } = render(
            <Repository { ...mockRepository } />
        );

        expect(container).toMatchSnapshot();
    });
});
