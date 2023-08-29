import { useGetAllProducts } from '../../api/product.api';

const Main = () => {
  const { data, isLoading } = useGetAllProducts();

  return <div>Main!!!!!</div>;
};

export default Main;
