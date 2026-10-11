import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ContactPage } from '../pages/ContactPage';

describe('ContactPage Form Validation & Flow', () => {
  it('validates required fields and shows error on empty submission', async () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    const submitBtn = screen.getByRole('button', { name: /Submit Inquiry/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText('Please enter your full name.')).toBeInTheDocument();
    expect(await screen.findByText('Please provide your email address.')).toBeInTheDocument();
    expect(await screen.findByText('Please provide your phone or WhatsApp number.')).toBeInTheDocument();
  });

  it('validates invalid email format', async () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    const emailInput = screen.getByLabelText(/Email Address \*/i);
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });

    const submitBtn = screen.getByRole('button', { name: /Submit Inquiry/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/Please enter a valid email address/i)).toBeInTheDocument();
  });

  it('completes submission flow and displays founder WhatsApp action buttons', async () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Your Full Name \*/i), { target: { value: 'Tariq Mansoor' } });
    fireEvent.change(screen.getByLabelText(/Business \/ Shop \/ Madrasa Name/i), { target: { value: 'Al-Madina Mart' } });
    fireEvent.change(screen.getByLabelText(/Email Address \*/i), { target: { value: 'tariq@mart.com' } });
    fireEvent.change(screen.getByLabelText(/WhatsApp \/ Phone Number \*/i), { target: { value: '03450001122' } });
    fireEvent.change(screen.getByLabelText(/Your Requirements & Shop Details \*/i), {
      target: { value: 'We need an offline POS billing counter with thermal printer in Karachi.' },
    });

    const submitBtn = screen.getByRole('button', { name: /Submit Inquiry/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/Inquiry Compiled Successfully/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /WhatsApp Abdul Jabbar/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /WhatsApp Fayyaz Khan/i })).toBeInTheDocument();
  });
});
