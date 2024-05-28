/* eslint-disable react/prop-types */
const CurrencyTable = ({ exchangeRates, baseCurrency, text }) => {
  return (
    <section className="sm:w-5/6 w-full flex flex-col justify-center items-center gap-4 h-2/3 bg-gray-50 rounded-md shadow-lg my-10">
      <p className="text-2xl py-3 text-center">
        {text !== null && text.title} {baseCurrency}
      </p>
      {exchangeRates === undefined ? null : (
        <table className="sm:w-1/2 w-5/6 justify-center items-center my-10  text-center [&_td]:py-2 [&_td]:border-4 [&_td]:text-lg  [&_td]:border-blue-200 table-auto">
          <thead>
            <tr>
              <th className="py-4 border-4 border-blue-200 text-xl">
                {text !== null && text.currency}
              </th>
              <th className="py-4 border-4 border-blue-200 text-xl">
                {text !== null && text.value}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EUR - Euro </td>
              <td>{exchangeRates.EUR}</td>
            </tr>
            <tr>
              <td>USD - United States Dollar </td>
              <td>{exchangeRates.USD}</td>
            </tr>
            <tr>
              <td>RON - Romanian New Leu </td>
              <td>{exchangeRates.RON}</td>
            </tr>
            <tr>
              <td>CHF - Swiss Franc </td>
              <td>{exchangeRates.CHF}</td>
            </tr>
            <tr>
              <td>GBP - British Pound </td>
              <td>{exchangeRates.GBP}</td>
            </tr>
            <tr>
              <td>AUD - Australian Dollar </td>
              <td>{exchangeRates.AUD}</td>
            </tr>
            <tr>
              <td>CAD - Canadian Dollar</td>
              <td>{exchangeRates.CAD}</td>
            </tr>
            <tr>
              <td>JPY - Japanese Yen</td>
              <td>{exchangeRates.JPY}</td>
            </tr>
            <tr>
              <td>RUB - Russian Ruble</td>
              <td>{exchangeRates.RUB}</td>
            </tr>
            <tr>
              <td>INR - Indian Rupee</td>
              <td>{exchangeRates.INR}</td>
            </tr>
            <tr>
              <td>AED - Emirati Dirham</td>
              <td>{exchangeRates.AED}</td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
};

export default CurrencyTable;
