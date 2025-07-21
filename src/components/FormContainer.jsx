import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{minHeight: '60vh'}}>
      <div className='bg-white p-4 rounded shadow-sm w-100' style={{maxWidth: '420px'}}>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
