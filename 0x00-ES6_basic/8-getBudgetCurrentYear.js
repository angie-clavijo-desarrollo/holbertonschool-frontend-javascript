function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear() - 1}`] = income;
  budget[`gdp-${getCurrentYear() - 1}`] = gdp;
  budget[`capita-${getCurrentYear() - 1}`] = capita;

  return budget;
}
