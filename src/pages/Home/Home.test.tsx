import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home/index';

jest.mock('axios');
const mockedAxiosGet = axios.get as jest.Mock;

describe('Home Component', () => {
  beforeEach(() => {
    mockedAxiosGet.mockClear();
  });

  const MockTheme = ({ children }: any): JSX.Element => {
    const theme = createTheme({});
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };

  const renderComponent = (): RenderResult =>
    render(
      <StyledEngineProvider injectFirst>
        <MockTheme>
          <Home />
        </MockTheme>
      </StyledEngineProvider>,
      { wrapper: BrowserRouter },
    );

  it('updates value on input change', async () => {
    renderComponent();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input).toHaveValue('new value');
  });

  it('sets isError to true when search is clicked with empty value', async () => {
    renderComponent();
    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);
    const errorText = await screen.getByText('Can not be empty.');
    expect(errorText).toBeInTheDocument();
  });

  it('shows LinearProgress when loading', async () => {
    mockedAxiosGet.mockImplementation(
      () =>
        new Promise((resolve) => {
          setTimeout(
            () => resolve({ data: { items: [], totalItems: 0 } }),
            100,
          );
        }),
    );
    renderComponent();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Harry' } });
    fireEvent.click(screen.getByText('Search'));
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  describe('API Requests', () => {
    it('handles API request errors gracefully', async () => {
      mockedAxiosGet.mockImplementation(() =>
        Promise.resolve({ data: { items: [], totalItems: 0 } }),
      );

      renderComponent();
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'Test' } });
      fireEvent.click(screen.getByText('Search'));

      const errorMessage = await screen.findByText(
        'It seems, nothing was found :(',
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
