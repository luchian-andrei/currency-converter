/* eslint-disable react/prop-types */
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";

const CurrencySelector = ({
  handleCurrency,
  selectedCurrency,
  purpose,
  select,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [currency, setCurency] = useState(selectedCurrency);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    setCurency(selectedCurrency);
  }, [selectedCurrency]);

  return (
    <section className="relative inline-block h-24 p-4 sm:w-1/3 w-full ">
      <p className="text-lg font-semibold">{purpose}</p>
      <button
        className={`border-2 ${
          focus ? "border-blue-500" : "border-gray-300"
        }  shadow-md rounded-md bg-gray-100 w-full py-3 px-4 text-start text-xl`}
        onClick={() => setShowOptions(!showOptions)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        {currency === "Select a currency" ? <p>{select}</p> : <p>{currency}</p>}
      </button>
      <Dropdown
        options={[
          "EUR",
          "USD",
          "RON",
          "GBP",
          "CAD",
          "AUD",
          "JPY",
          "CHF",
          "RUB",
          "INR",
          "AED",
        ]}
        visible={showOptions}
        updateOption={(option) => [handleCurrency(option), setCurency(option)]}
      />
    </section>
  );
};

export default CurrencySelector;
