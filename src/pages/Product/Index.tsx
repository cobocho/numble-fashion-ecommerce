import { useGetProductById } from '@/api/product.api';
import { useParams } from 'react-router-dom';
import * as Style from './index.style';
import ProductInfo from './ProductInfo';
import { useState } from 'react';

const Product = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const { id } = useParams();
  const { data: product } = useGetProductById(id!);

  return (
    <Style.Container>
      <ProductInfo
        setQuantity={setQuantity}
        quantity={quantity}
        product={product!}
      />
    </Style.Container>
  );
};

export default Product;
