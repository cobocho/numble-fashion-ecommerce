import { useGetProductById } from '@/api/product.api';
import { useParams } from 'react-router-dom';
import * as Style from './index.style';
import ProductInfo from './ProductInfo/Index';

const Product = () => {
  const { id } = useParams();

  const { data: product } = useGetProductById(id!);

  return (
    <Style.Container>
      <ProductInfo product={product!} />
    </Style.Container>
  );
};

export default Product;
