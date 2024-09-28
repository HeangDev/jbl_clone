export const currencyFormat = (value) => new Intl.NumberFormat('th', {
    style: 'currency',
    currency: 'THB'
}).format(value);