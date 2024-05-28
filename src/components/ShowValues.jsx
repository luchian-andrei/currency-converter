/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEquals } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowValues = ({
  handleShowValues,
  handleInfo,
  baseCurrency,
  desiredCurrency,
  amount,
  showInfo,
  purpose,
  alert,
  warn,
}) => {
  const [exchangeRates, setExchangeRates] = useState();
  const [desiredRate, setDesiredRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [baseValuePerUnit, setBaseValuePerUnit] = useState();
  const [desiredValuePerUnit, setDesiredValuePerUnit] = useState();

  const calculate = () => {
    setConvertedAmount(amount * desiredRate);
  };

  const dataFetch = async () => {
    const options = {
      method: "GET",
      url: "https://exchange-rate-api1.p.rapidapi.com/latest",
      params: { base: baseCurrency },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_CURRENCY_API_KEY,
        "X-RapidAPI-Host": "exchange-rate-api1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setExchangeRates(response.data.rates);
      setDesiredRate(response.data.rates[desiredCurrency]);
    } catch (error) {
      console.error(error);
    }
  };

  const ratePerUnit = () => {
    setBaseValuePerUnit(1 * desiredRate);
    setDesiredValuePerUnit(1 / desiredRate);
  };

  const checkStates = () => {
    if (amount === undefined) {
      toast.warn(`${warn[0]}`, {
        position: "top-center",
        hideProgressBar: true,
        transition: Slide,
      });
    } else if (amount !== undefined && baseCurrency === "Select a currency") {
      toast.warn(`${warn[1]}`, {
        position: "top-center",
        hideProgressBar: true,
        transition: Slide,
      });
    } else if (
      amount !== undefined &&
      baseCurrency !== "Select a currency" &&
      desiredCurrency === "Select a currency"
    ) {
      toast.warn(`${warn[2]}`, {
        position: "top-center",
        hideProgressBar: true,
        transition: Slide,
      });
    } else {
      dataFetch();
    }
  };

  useEffect(() => {
    handleShowValues(desiredRate, exchangeRates);
    calculate();
    ratePerUnit();
  }, [desiredRate]);

  // useEffect(() => {
  //   setShowAlert(showInfo);
  // }, [showInfo]);

  return (
    <section className="flex flex-col w-full justify-center items-center">
      <div className="w-full flex flex-wrap justify-around items-center  px-6">
        <div
          className={`flex ${
            isNaN(desiredRate) ? "invisible opacity-0" : "visible opacity-100"
          } flex-col justify-center items-center text-center transition-opacity duration-300 sm:w-1/3 w-1/2 py-6`}
        >
          <p className="text-2xl">
            {amount} {baseCurrency}
          </p>
          <FontAwesomeIcon icon={faEquals} className="text-2xl" />
          <p className="text-2xl">
            {isNaN(convertedAmount) ? null : convertedAmount.toFixed(2)}{" "}
            {desiredCurrency}
          </p>
        </div>
        <p
          className={` ${
            showInfo === true ? "visible opacity-100" : "invisible opacity-0"
          }  rounded-md border-2 border-red-600  bg-red-400 text-white transition-opacity duration-200 p-6 sm:w-1/4 w-1/2  font-semibold`}
        >
          {alert}
        </p>

        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md disabled:opacity-50  transition-all duration-500 text-xl mt-3 sm:mt-0"
          onClick={() => [checkStates(), handleInfo()]}
        >
          {purpose}
        </button>
      </div>
      <div
        className={`${
          isNaN(desiredRate) ? "invisible opacity-0" : "visible opacity-100"
        } transition-opacity duration-300 py-6 w-2/3 flex `}
      >
        <div className="flex flex-col text-lg font-semibold text-gray-500 border-t-2 border-gray-200 w-full justify-center items-center py-2">
          <p>
            1 {baseCurrency} ={" "}
            {baseValuePerUnit === undefined
              ? null
              : baseValuePerUnit.toFixed(5)}{" "}
            {desiredCurrency}
          </p>
          <p>
            1 {desiredCurrency} ={" "}
            {desiredValuePerUnit === undefined
              ? null
              : desiredValuePerUnit.toFixed(5)}{" "}
            {baseCurrency}
          </p>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ShowValues;
