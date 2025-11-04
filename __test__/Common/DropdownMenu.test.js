import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DropdownMenu from '../../Components/Common/DropdownMenu';

test('renders and opens menu', async () => {
  render(<DropdownMenu />);
  const user = userEvent.setup();

  const button = screen.getByRole('button', { name: /dropdownButton/i });
  expect(button).toBeInTheDocument();

  await user.click(button);

  expect(screen.getByRole('menu')).toBeInTheDocument();
  expect(screen.getAllByRole('menuitem').length).toBeGreaterThan(0);
});
