import { Link } from 'react-router-dom';
import * as Style from './index.style';
import { Product } from '@/types/product';
import { ROUTE_PATH } from '@/constants/path';

interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  return (
    <Link to={ROUTE_PATH.PRODUCT.replace(':id', String(product.product_no))}>
      <Style.Container>
        <Style.Image src={product.main_image_url} />
        <Style.Name>{product.product_name}</Style.Name>
        <Style.Price>{product.price.toLocaleString()}원</Style.Price>
        <Style.Description>{product.description}</Style.Description>
      </Style.Container>
    </Link>
  );
};

export default ProductItem;
