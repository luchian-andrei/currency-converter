/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CurrencySelector from "./CurrencySelector";
import AmountInput from "./AmountInput";
import ShowValues from "./ShowValues";

const MainSection = ({ handleMainSection, text }) => {
  const [baseCurrency, setBaseCurrency] = useState("Select a currency");
  const [desiredCurrency, setDesiredCurrency] = useState("Select a currency");
  const [amount, setAmount] = useState();
  const [desiredRate, setDesiredRate] = useState();
  const [showInfo, setShowInfo] = useState(false);
  const [exchangeRates, setExchangeRates] = useState();

  useEffect(() => {
    handleMainSection(exchangeRates, baseCurrency);
  }, [desiredRate]);

  return (
    <section
      className={`w-full sm:w-5/6  ${
        exchangeRates !== undefined ? "mb-4" : "mb-16"
      } flex flex-col justify-center items-center gap-4 h-2/3 bg-gray-50 rounded-md shadow-lg`}
    >
      <div className=" w-full flex flex-col sm:flex-row justify-between   items-center">
        <AmountInput
          baseCurrency={baseCurrency}
          handleInput={(value) => setAmount(value)}
          purpose={text !== null && text.amount}
        />
        <CurrencySelector
          handleCurrency={(option) => setBaseCurrency(option)}
          selectedCurrency={baseCurrency}
          purpose={text !== null && text.from}
          select={text !== null && text.select}
        />
        <FontAwesomeIcon
          icon={faArrowRightArrowLeft}
          className="text-3xl text-gray-400 hover:opacity-80 cursor-pointer sm:self-end  sm:mb-2 mt-6"
          onClick={() => [
            setBaseCurrency(desiredCurrency),
            setDesiredCurrency(baseCurrency),
            setShowInfo(true),
          ]}
        />
        <CurrencySelector
          handleCurrency={(option) => setDesiredCurrency(option)}
          selectedCurrency={desiredCurrency}
          purpose={text !== null && text.to}
          select={text !== null && text.select}
        />
      </div>
      <ShowValues
        handleShowValues={(rate, excRates) => [
          setDesiredRate(rate),
          setExchangeRates(excRates),
        ]}
        handleInfo={() => setShowInfo(false)}
        baseCurrency={baseCurrency}
        desiredCurrency={desiredCurrency}
        amount={amount}
        showInfo={showInfo}
        purpose={text !== null && text.convert}
        alert={text !== null && text.alert}
        warn={text !== null && text.warn}
      />
    </section>
  );
};

export default MainSection;
