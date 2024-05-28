/* eslint-disable react/prop-types */
const Dropdown = ({ options, visible, updateOption }) => {
  return (
    <div
      className={`${
        visible ? " visible opacity-100" : "invisible opacity-0"
      } absolute  border-2 border-gray-200 p-2 shadow-md rounded-md transition-all duration-150 flex justify-center h-32 overflow-y-auto w-32 bg-gray-100 z-20`}
    >
      <ul>
        {options.map((option, index) => {
          return (
            <li
              key={index}
              className="border-b-2 border-slate-300 w-full cursor-pointer py-1 text-xl"
              onClick={() => updateOption(option)}
            >
              {option}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
