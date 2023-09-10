import { Dispatch, SetStateAction } from 'react';
import * as Style from './index.style';
import Button from '@/common/Button';
import { Product } from '@/types/product';
import { CartIcon } from '@/common/Icons';
import Counter from '@/components/Counter';
import calculateEstimatedDeliveryDate from '../calculateEstimatedDeliveryDate';
import DELIVERY_CONFIG from '@/constants/delivery-config';

interface Props {
  product: Product;
  setQuantity: Dispatch<SetStateAction<number>>;
  quantity: number;
}

const ProductInfo = ({ product, setQuantity, quantity }: Props) => {
  const { averageTime, year, month, day } = calculateEstimatedDeliveryDate(product.prev_delivery_times);

  const increaseHandler = () => {
    setQuantity((prev) => (prev < DELIVERY_CONFIG.MAX_CART_QUANTITY ? prev + 1 : prev));
  };

  const decreaseHandler = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

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
        <Style.ProductOrder>
          <Counter
            increaseHandler={increaseHandler}
            decreaseHandler={decreaseHandler}
            count={quantity}
          />
          <Button size="sm">
            <CartIcon />
          </Button>
          <Button size="full">바로 구매</Button>
        </Style.ProductOrder>
      </Style.ProductData>
    </Style.ProductInfoWrapper>
  );
};

export default ProductInfo;
