import * as Style from './index.style';
import { Product } from '@/types/product';

interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  return (
    <Style.Container>
      <Style.Image src={product.main_image_url} />
      <Style.Name>{product.product_name}</Style.Name>
      <Style.Price>{product.price.toLocaleString()}원</Style.Price>
      <Style.Description>{product.description}</Style.Description>
    </Style.Container>
  );
};

export default ProductItem;
