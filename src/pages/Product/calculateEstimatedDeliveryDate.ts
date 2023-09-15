import DELIVERY_CONFIG from '@/constants/delivery-config';

const calculateEstimatedDeliveryDate = (times: number[]) => {
  const averageTime = times.length
    ? Math.ceil(times.reduce((acc, cur) => acc + cur, 0) / times.length)
    : DELIVERY_CONFIG.DEFAULT_DELIVERY_TIME;

  const today = new Date();
  const result = new Date();

  result.setDate(today.getDate() + averageTime);

  return { averageTime, year: result.getFullYear(), month: result.getMonth() + 1, day: result.getDate() };
};

export default calculateEstimatedDeliveryDate;
