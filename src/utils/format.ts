
export const formatPrice = (price: number): string => {
  // For prices in Indian Rupees
  if (price >= 10000000) {
    // Convert to crores (1 crore = 10 million)
    return `${(price / 10000000).toFixed(2)} Cr`;
  } else if (price >= 100000) {
    // Convert to lakhs (1 lakh = 100 thousand)
    return `${(price / 100000).toFixed(2)} L`;
  } else {
    // Format with commas for thousands
    return price.toLocaleString('en-IN');
  }
};
