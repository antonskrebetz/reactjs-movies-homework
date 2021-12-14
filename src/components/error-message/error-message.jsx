import img from './error.gif';
import './error-message.scss';

const ErrorMessage = () => {
  return (
    <img className='error-img' src={img} alt="Error"/>
  )
}

export default ErrorMessage;