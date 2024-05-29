import LanguageSelect from "./components/LanguageSelect";
import MainSection from "./components/MainSection";
import CurrencyTable from "./components/CurrencyTable";
import { useEffect, useState } from "react";
import TextOptions from "./components/TextOptions";

function App() {
  const [language, setLanguage] = useState("English");
  const [exchangeRates, setExchangeRates] = useState();
  const [baseCurrency, setBaseCurrency] = useState();

  const [mainSectionText, setMainSectionText] = useState();
  const [currencySectionText, setCurrencySectionText] = useState();

  const changeText = () => {
    for (let i = 0; i < TextOptions.length; i++) {
      if (language === TextOptions[i].language) {
        setMainSectionText(TextOptions[i].mainSection);
        setCurrencySectionText(TextOptions[i].currencySection);
      }
    }
  };

  useEffect(() => {
    changeText();
  }, [language]);

  return (
    <section
      className={`w-full ${
        baseCurrency === "Select a currency" ? "h-fit sm:h-screen " : "h-fit"
      }   flex flex-col justify-center items-center bg-gradient-to-br from-[#8BC6EC] to-[#9599E2]`}
    >
      <LanguageSelect handleChanges={(option) => setLanguage(option)} />
      <MainSection
        handleMainSection={(rates, baseCur) => [
          setExchangeRates(rates),
          setBaseCurrency(baseCur),
        ]}
        text={mainSectionText !== undefined ? mainSectionText : null}
      />
      {baseCurrency !== "Select a currency" ? (
        <CurrencyTable
          exchangeRates={exchangeRates}
          baseCurrency={baseCurrency}
          text={currencySectionText !== undefined ? currencySectionText : null}
        />
      ) : null}
    </section>
  );
}

export default App;
