import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Logo } from '../components/common/Logo';
import { Button } from '../components/common/Button';
import { MemoryRouter } from 'react-router-dom';

describe('Logo Component', () => {
  it('renders exact YUSERTECH brand wordmark', () => {
    render(<Logo variant="full" />);
    expect(screen.getByText('YUSERTECH')).toBeInTheDocument();
    expect(screen.getByText('Software & Web')).toBeInTheDocument();
  });

  it('supports mark-only variant without text', () => {
    render(<Logo variant="mark-only" />);
    expect(screen.queryByText('YUSERTECH')).not.toBeInTheDocument();
  });
});

describe('Button Component', () => {
  it('renders button with children and primary styling', () => {
    render(<Button variant="primary">Click Me</Button>);
    const btn = screen.getByRole('button', { name: 'Click Me' });
    expect(btn).toBeInTheDocument();
  });

  it('renders as router Link when to prop is passed', () => {
    render(
      <MemoryRouter>
        <Button to="/contact">Discuss Project</Button>
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: 'Discuss Project' });
    expect(link).toHaveAttribute('href', '/contact');
  });

  it('shows loading indicator when isLoading is true', () => {
    render(<Button isLoading>Submit</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
  });
});
