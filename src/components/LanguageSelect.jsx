/* eslint-disable react/prop-types */
import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";

const LanguageSelect = ({ handleChanges }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const updateOption = (option) => {
    setSelectedLanguage(option);
  };

  useEffect(() => {
    handleChanges(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div className="w-full h-1/3 px-16 text-xl my-10 sm:mt-10  ">
      <button
        className=" p-2 shadow-md rounded-md bg-gray-100 "
        onClick={() => setShowOptions(!showOptions)}
      >
        <p> {selectedLanguage} </p>
      </button>
      <Dropdown
        options={["Romana", "English", "Espanol", "Francais"]}
        visible={showOptions}
        updateOption={updateOption}
      />
    </div>
  );
};

export default LanguageSelect;
