import App from './App';
import { expect, test } from 'vitest';
import { render, waitFor } from '@testing-library/react';

test ('note renders', async () => {
    const { getByText } = render(<App />);
    await waitFor(() => getByText('You can do hard things, Whitney-Rene'));
    expect(getByText('You can do hard things, Whitney-Rene')).toBeDefined();
});