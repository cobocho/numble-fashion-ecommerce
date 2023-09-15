import { Product } from '@/types/product';
import ProductItem from '@/components/ProductItem';
import * as Style from './index.style';

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  if (products.length === 0) {
    return <Style.NoProduct>품목이 존재하지 않습니다!</Style.NoProduct>;
  }

  return (
    <Style.Container>
      {products.map((product) => (
        <ProductItem
          product={product}
          key={product.product_no}
        />
      ))}
    </Style.Container>
  );
};

export default ProductList;
