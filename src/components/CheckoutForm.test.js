import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm/>);

    const head = document.querySelector('form');

    expect(head).toBeInTheDocument();
    expect(head).toHaveTextContent(/checkout form/i);

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstName = screen.getByLabelText(/first name:/i);
    const lastName = screen.getByLabelText(/last name:/i);
    const address = screen.getByLabelText(/address:/i);
    const city = screen.getByLabelText(/city:/i);
    const state = screen.getByLabelText(/state:/i);
    const checkoutButton = screen.getByRole('button');

    userEvent.type(firstName, 'John');
    userEvent.type(lastName, 'Doe');
    userEvent.type(address, '232 main ave');
    userEvent.type(city, 'Manhattan');
    userEvent.type(state, 'New York');
    userEvent.click(checkoutButton);

    const MessageOfApproval = document.querySelector('.success-message');
    expect(MessageOfApproval).toBeInTheDocument();
    
});
   



