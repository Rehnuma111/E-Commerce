import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-primary text-white text-center py-4 mt-5 shadow-sm'>
      <div className='container'>
        <span className='fw-semibold'>&copy; {new Date().getFullYear()} E-Commerce. All rights reserved.</span>
      </div>
    </footer>
  );
};
export default Footer;
