
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';

function CartWidget() {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} size='lg' />
      <Badge variant='primary'>3</Badge>
    </div>
  );
}

export default CartWidget;
