import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <Nav.Link as={Link} to='/login' className='fw-bold text-primary'>Sign In</Nav.Link>
        ) : (
          <span className='text-secondary'>Sign In</span>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <Nav.Link as={Link} to='/shipping' className='fw-bold text-primary'>Shipping</Nav.Link>
        ) : (
          <span className='text-secondary'>Shipping</span>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <Nav.Link as={Link} to='/payment' className='fw-bold text-primary'>Payment</Nav.Link>
        ) : (
          <span className='text-secondary'>Payment</span>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <Nav.Link as={Link} to='/placeorder' className='fw-bold text-primary'>Place Order</Nav.Link>
        ) : (
          <span className='text-secondary'>Place Order</span>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
