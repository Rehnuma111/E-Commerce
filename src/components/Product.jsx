import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <div className='card h-100 shadow-sm border-0 product-card-hover'>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} className='card-img-top img-fluid p-3' alt={product.name} style={{objectFit: 'contain', height: '200px'}} />
      </Link>
      <div className='card-body d-flex flex-column'>
        <Link to={`/product/${product._id}`} className='text-decoration-none text-dark'>
          <h5 className='card-title fw-bold mb-2'>{product.name}</h5>
        </Link>
        <div className='mb-2'>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#0dcaf0'} />
        </div>
        <h4 className='text-primary fw-bold mb-3'>${product.price}</h4>
        <Button as={Link} to={`/product/${product._id}`} variant='success' className='mt-auto fw-semibold rounded-pill px-3 py-2'>
          View Details
        </Button>
      </div>
    </div>
  );
};

export default Product;
