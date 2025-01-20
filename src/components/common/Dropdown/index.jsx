import { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = option => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-75 h-44">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-100 px-4 py-2 text-sm rounded-l-md flex items-center justify-between w-full h-full text-center"
      >
        {selected} ▼
      </button>
      {isOpen && (
        <ul className="absolute bg-white shadow-md mt-2 w-full rounded-md z-10 text-center">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-center"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
