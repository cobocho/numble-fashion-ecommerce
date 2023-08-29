import { useGetAllProducts } from '../../api/product.api';
import ProductList from '../../components/ProductList';
import * as Style from './index.style';

const Main = () => {
  const { data: products, isLoading, isError } = useGetAllProducts();

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <Style.Container>
      <ProductList products={products} />
    </Style.Container>
  );
};

export default Main;
