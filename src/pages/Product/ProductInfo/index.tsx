import Button from '@/common/Button';
import * as Style from './index.style';
import { Product } from '@/types/product';
import { CartIcon } from '@/common/Icons';

interface Props {
  product: Product;
}

const ProductInfo = ({ product }: Props) => {
  return (
    <Style.ProductInfoWrapper>
      <Style.ProductImage src={product!.main_image_url} />
      <Style.ProductData>
        <Style.ProductName>{product.product_name}</Style.ProductName>
        <Style.ProductPrice>{product.price.toLocaleString()}원</Style.ProductPrice>
        <Style.ProductDesc>{product.description}</Style.ProductDesc>
        <Style.ProductButtonGroup>
          <Button size="sm">
            <CartIcon />
          </Button>
          <Button size="full">바로 구매</Button>
        </Style.ProductButtonGroup>
      </Style.ProductData>
    </Style.ProductInfoWrapper>
  );
};

export default ProductInfo;
