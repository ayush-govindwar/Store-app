export const formatCurrency = (amount: number | null) => {
    const value = amount || 0;
    return new Intl.NumberFormat('en-US', { //international number format
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };