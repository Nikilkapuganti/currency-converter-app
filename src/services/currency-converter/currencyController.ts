import axios from "axios";



export const getallCurrencies = async  ()=>{
    const response = await axios.get(`${process.env.COINGECKO_API}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      });
  
      return  response.data;
}

export const convert = async (body: { sourceCrypto: any; amount: any; targetCurrency: any; }) => {

  const { sourceCrypto, amount, targetCurrency } = body;
  const response = await axios.get(`${process.env.COINGECKO_API}/simple/price`, {
    params: {
      ids: sourceCrypto,
      vs_currencies: targetCurrency,
    },
  });
  const exchangeRate = response.data[sourceCrypto][targetCurrency];
  if (exchangeRate === undefined) {
    console.error('Exchange rate not available for the selected pair');
    return null;
  }
  const convertedAmount = amount * exchangeRate;
  let finalResult = { convertedAmount }
  return finalResult

}


