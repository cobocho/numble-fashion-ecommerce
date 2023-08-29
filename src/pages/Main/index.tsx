import { useGetAllProducts } from '../../api/product.api';
import ProductList from '../../components/ProductList';
import * as Style from './index.style';

const Main = () => {
  const { data: products } = useGetAllProducts();

  return (
    <Style.Container>
      <ProductList products={products ? products : []} />
    </Style.Container>
  );
};

export default Main;
