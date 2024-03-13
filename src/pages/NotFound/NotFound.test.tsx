import { Button, StyledEngineProvider } from '@mui/material';
import React from 'react';
import renderer from 'react-test-renderer';

import NotFound from '@/pages/NotFound';

describe('NotFound component', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <NotFound />
      </StyledEngineProvider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct title', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <NotFound />
      </StyledEngineProvider>,
    );
    const instance = component.root;

    const title = instance.findByProps({ variant: 'h1' });
    expect(title.props.children).toBe('404');
  });

  it('renders the correct description', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <NotFound />
      </StyledEngineProvider>,
    );
    const instance = component.root;

    const description = instance.findByProps({ variant: 'h5', maxWidth: 'md' });
    expect(description.props.children).toBe(
      'The page you’re looking for doesn’t exist.',
    );
  });

  it('renders the back home button with correct props', () => {
    const component = renderer.create(
      <StyledEngineProvider injectFirst>
        <NotFound />
      </StyledEngineProvider>,
    );
    const instance = component.root;

    const backButton = instance.findByType(Button);
    expect(backButton.props.variant).toBe('contained');
    expect(backButton.props.size).toBe('large');
    expect(backButton.props.href).toBe('/');
    expect(backButton.props.children).toBe('Back Home');
  });
});
