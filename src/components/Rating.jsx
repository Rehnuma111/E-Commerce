import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            style={{ color: color || '#0dcaf0', fontSize: '1.2rem' }}
            className={
              value >= star
                ? 'fas fa-star'
                : value >= star - 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        ))}
        <span className='fw-bold ms-2'>{text && text}</span>
      </span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

export default Rating;
