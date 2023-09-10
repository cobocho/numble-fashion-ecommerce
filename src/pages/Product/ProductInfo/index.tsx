import Button from '@/common/Button';
import * as Style from './index.style';
import { Product } from '@/types/product';
import { CartIcon } from '@/common/Icons';
import calculateEstimatedDeliveryDate from '../calculateEstimatedDeliveryDate';

interface Props {
  product: Product;
}

const ProductInfo = ({ product }: Props) => {
  const { averageTime, year, month, day } = calculateEstimatedDeliveryDate(product.prev_delivery_times);

  return (
    <Style.ProductInfoWrapper>
      <Style.ProductImage src={product!.main_image_url} />
      <Style.ProductData>
        <Style.ProductName>{product.product_name}</Style.ProductName>
        <Style.ProductPrice>{product.price.toLocaleString()}원</Style.ProductPrice>
        <Style.ProductDesc>{product.description}</Style.ProductDesc>
        <Style.ProductDelivery>
          평균 {averageTime}일 소요
          <br />
          {year}/{month}/{day} 도착 예정
        </Style.ProductDelivery>
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
