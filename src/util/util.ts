export const formatDateTimeVn = (time: string) => {
  const date = new Date(time);

  return date.toLocaleDateString('vi-VN');
};
