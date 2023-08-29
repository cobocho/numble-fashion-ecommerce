import { Product } from '../../types/product';
import ProductItem from '../ProductItem';
import * as Style from './index.style';

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return <Style.Container>{products.map((product) => ProductItem({ product }))}</Style.Container>;
};

export default ProductList;
