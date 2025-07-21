import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
  return <div className={`alert alert-${variant} rounded-3 shadow-sm fw-semibold`}>
    {children}
  </div>;
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
