import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: uncontrolled input - urlKeyword may be undefined
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} className='d-flex my-2 my-lg-0'>
      <input
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        className='form-control  me-2 shadow-sm'
        placeholder='Search products...'
        value={keyword}
      />
      <button
        type='submit'
        className='btn fw-bold px-4 border-0'
        style={{ background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)', color: '#fff' }}
      >
        Search
      </button>
    </Form>
  );
};

export default SearchBox;
