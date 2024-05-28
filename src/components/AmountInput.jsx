/* eslint-disable react/prop-types */
import { useState } from "react";

const AmountInput = ({ baseCurrency, handleInput, purpose }) => {
  const [focus, setFocus] = useState(false);

  return (
    <section className="h-24 w-full sm:w-1/3  p-4">
      <p className="text-lg font-semibold">{purpose}</p>
      <div
        className={`rounded-md border-2 ${
          focus ? " border-blue-500" : "border-gray-300"
        }  flex justify-start items-center gap-1 py-3 px-4 bg-gray-100 shadow-md`}
      >
        {baseCurrency === "Select a currency" ? (
          <p className="px-3"></p>
        ) : (
          <p>{baseCurrency}</p>
        )}
        <input
          type="number"
          min={1}
          className=" focus:outline-none w-full px-4 bg-gray-100 text-xl"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) => handleInput(e.target.value)}
        />
      </div>
    </section>
  );
};

export default AmountInput;
