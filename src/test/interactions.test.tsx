import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ContactPage } from '../pages/ContactPage';
import { POSMockup } from '../components/products/POSMockup';

describe('ContactPage Form Validation & Flow', () => {
  it('validates required fields and shows error on empty submission', async () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    const submitBtn = screen.getByRole('button', { name: /Submit Project Inquiry/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText('Please enter your full name.')).toBeInTheDocument();
    expect(await screen.findByText('Please provide your email address.')).toBeInTheDocument();
    expect(await screen.findByText('Please provide a contact phone or WhatsApp number.')).toBeInTheDocument();
  });

  it('validates invalid email format', async () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    const emailInput = screen.getByLabelText(/Email Address \*/i);
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });

    const submitBtn = screen.getByRole('button', { name: /Submit Project Inquiry/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/Please enter a valid email address/i)).toBeInTheDocument();
  });

  it('completes submission flow and displays direct communication handoffs', async () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Full Name \*/i), { target: { value: 'Zayd Tariq' } });
    fireEvent.change(screen.getByLabelText(/Business \/ Organization Name/i), { target: { value: 'Tariq Retailers' } });
    fireEvent.change(screen.getByLabelText(/Email Address \*/i), { target: { value: 'zayd@tariq.com' } });
    fireEvent.change(screen.getByLabelText(/Phone \/ WhatsApp Number \*/i), { target: { value: '+15550001122' } });
    fireEvent.change(screen.getByLabelText(/Project Description & Requirements \*/i), {
      target: { value: 'We need an offline POS billing setup for our grocery store.' },
    });

    const submitBtn = screen.getByRole('button', { name: /Submit Project Inquiry/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/Inquiry Compiled Successfully/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Open in Email Client/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send via WhatsApp/i })).toBeInTheDocument();
  });
});

describe('POSMockup Interactive Terminal', () => {
  it('renders sales register and calculates total price', () => {
    render(<POSMockup />);
    expect(screen.getByText(/YUSER Retail POS/i)).toBeInTheDocument();
    expect(screen.getByText(/Current Sale Ticket/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Due/i)).toBeInTheDocument();
  });

  it('allows clicking an item from quick touch catalog to add to cart', () => {
    render(<POSMockup />);
    const itemBtn = screen.getByRole('button', { name: /Pure Basmati Rice/i });
    fireEvent.click(itemBtn);
    // Pure Basmati Rice is now in both the catalog and the cart ticket
    const elements = screen.getAllByText(/Pure Basmati Rice \(2kg\)/i);
    expect(elements.length).toBe(2);
    // Ticket now displays 4 items
    expect(screen.getByText(/4 items/i)).toBeInTheDocument();
  });
});
