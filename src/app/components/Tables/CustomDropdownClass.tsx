import { useState } from "react";

export default function CustomDropdownClass() {
  // Defining state for selected country (initialized with "Select Class")
  const [selectedCountry, setSelectedCountry] = useState<string>("Select Class");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Array of countries (in this case, letters A-F for demonstration)
  const countries: string[] = ["A", "B", "C", "D", "E", "F"];

  // Function to toggle the dropdown open/close state
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Function to handle the selection of a country
  const handleSelect = (country: string): void => {
    setSelectedCountry(country); // Update selected country
    setIsOpen(false); // Close the dropdown
  };



  return (
    <div className="w-44 mx-auto mt-2">
      <label className="block text-[#333D61] font-[100] mb-1">
        Class/Section
      </label>
      <div
        className="relative border border-[#333D61] rounded-lg shadow-sm bg-white"
        onClick={toggleDropdown}
      >
        <div className="p-1 flex justify-between items-center cursor-pointer">
          <span className="text-gray-700 font-normal">{selectedCountry}</span>
          <span
            className={`text-gray-500 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {/* SVG Arrow */}
            <svg
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.64967 0.161958L4.31372 3.49791L0.977772 0.161958C0.868957 0.056861 0.723217 -0.00129273 0.571941 2.18104e-05C0.420665 0.00133635 0.275958 0.0620139 0.168986 0.168986C0.0620139 0.275958 0.00133635 0.420665 2.18104e-05 0.571941C-0.00129273 0.723217 0.056861 0.868956 0.161958 0.977771L3.90408 4.7199C3.95775 4.77379 4.02161 4.81644 4.09194 4.84537C4.16228 4.87429 4.23767 4.88891 4.31372 4.88837C4.38975 4.88875 4.46509 4.87406 4.53541 4.84514C4.60572 4.81622 4.6696 4.77366 4.72336 4.7199L8.46548 0.977771C8.57058 0.868956 8.62873 0.723217 8.62742 0.571941C8.62611 0.420665 8.56543 0.275958 8.45846 0.168986C8.35148 0.0620139 8.20678 0.00133635 8.0555 2.18104e-05C7.90423 -0.00129273 7.75849 0.056861 7.64967 0.161958Z"
                fill="#333D61"
              />
            </svg>
          </span>
        </div>

        {/* Dropdown */}
        {isOpen && (
          <ul className="absolute left-0 right-0 max-h-40 overflow-y-auto bg-white border border-[#333D61] rounded-lg shadow-lg mt-1 z-10">
            {countries.map((country, index) => (
              <li
                key={index}
                className="p-2 text-sm text-gray-700 hover:bg-[#F0F4FF] hover:text-[#333D61] cursor-pointer transition-colors"
                onClick={() => handleSelect(country)}
              >
                {country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
