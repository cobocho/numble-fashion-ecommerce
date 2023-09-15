import styled from '@emotion/styled';

export const ProductInfoWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const ProductImage = styled.img`
  width: 500px;
  aspect-ratio: 1/1;
`;

export const ProductData = styled.div`
  position: relative;
  width: 500px;
  padding: 30px 0;
`;

export const ProductName = styled.h1`
  font-size: 32px;
  margin-bottom: 12px;
`;

export const ProductPrice = styled.span`
  display: block;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 700;
`;

export const ProductDesc = styled.p`
  margin-bottom: 12px;
  font-size: 18px;
`;

export const ProductDelivery = styled.span`
  display: block;
  margin-bottom: 12px;
  font-size: 18px;
`;

export const ProductOrder = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  bottom: 30px;
  display: flex;
  width: 100%;
  height: 30px;
`;
