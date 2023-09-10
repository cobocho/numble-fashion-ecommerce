import { useGetProductById } from '@/api/product.api';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  const { data: product } = useGetProductById(id!);

  return <div></div>;
};

export default Product;
