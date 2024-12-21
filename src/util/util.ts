export const formatDateTimeVn = (time: string) => {
  const date = new Date(time);

  return date.toLocaleDateString('vi-VN');
};

export const formatCurrency = (amount: number) => {
  return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};
