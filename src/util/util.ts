export const formatDateTimeVn = (time: string) => {
  const date = new Date(time);

  return date.toLocaleDateString('vi-VN');
};

export const formatCurrency = (amount: number) => {
  return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

export const formatCurrencyV2 = (amount: number) => {
  const amountInt = amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return amountInt.split('.')[0];
};
