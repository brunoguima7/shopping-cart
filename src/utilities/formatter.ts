const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "BRL",
    style: "currency",
  })
  
  export function formatCurrency(number: number) {
    return currencyFormatter.format(number)
  }