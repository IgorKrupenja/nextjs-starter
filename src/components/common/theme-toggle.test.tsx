import { fireEvent, render, screen } from '@testing-library/react';
import { useTheme } from 'next-themes';
import { Mock, vi } from 'vitest';

import { ThemeToggle } from './theme-toggle';

vi.mock('next-themes', () => ({
  useTheme: vi.fn(),
}));

vi.mock('@/components/ui/dropdown-menu', () => ({
  DropdownMenu: vi.fn(({ children }) => <div data-testid="dropdown-menu">{children}</div>),
  DropdownMenuTrigger: vi.fn(({ children }) => (
    <div data-testid="dropdown-trigger">{children}</div>
  )),
  DropdownMenuContent: vi.fn(({ children }) => (
    <div data-testid="dropdown-content">{children}</div>
  )),
  DropdownMenuItem: vi.fn(({ children, ...props }) => (
    <div data-testid="dropdown-item" {...props}>
      {children}
    </div>
  )),
}));

vi.mock('lucide-react', () => ({
  Sun: vi.fn(() => <div data-testid="sun-icon" />),
  Moon: vi.fn(() => <div data-testid="moon-icon" />),
}));

describe('ThemeToggle', () => {
  const mockSetTheme = vi.fn();
  (useTheme as Mock).mockReturnValue({ setTheme: mockSetTheme });

  it('renders the component with correct structure', () => {
    render(<ThemeToggle />);
    expect(screen.getByTestId('dropdown-menu')).toBeDefined();
    expect(screen.getByTestId('dropdown-trigger')).toBeDefined();
    expect(screen.getByTestId('dropdown-content')).toBeDefined();
    expect(screen.getAllByTestId('dropdown-item')).toHaveLength(3);
  });

  it('renders the toggle button', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: 'Toggle color theme' });
    expect(button).toBeDefined();
  });

  it('renders Sun and Moon icons', () => {
    render(<ThemeToggle />);
    expect(screen.getByTestId('sun-icon')).toBeDefined();
    expect(screen.getByTestId('moon-icon')).toBeDefined();
  });

  it('calls setTheme with "light" when Light option is clicked', () => {
    render(<ThemeToggle />);
    fireEvent.click(screen.getByText('Light'));
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });

  it('calls setTheme with "dark" when Dark option is clicked', () => {
    render(<ThemeToggle />);
    fireEvent.click(screen.getByText('Dark'));
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('calls setTheme with "system" when System option is clicked', () => {
    render(<ThemeToggle />);
    fireEvent.click(screen.getByText('System'));
    expect(mockSetTheme).toHaveBeenCalledWith('system');
  });
});
