import React from "react";

// Used on 'searchPage'
const SortResults = ({ value, name, onSelectSort }) => {
  const handleSelection = (e) => {
    onSelectSort(e.target.value);
  };

  return (
    <option value={value} onClick={handleSelection}>
      {name}
    </option>
  );
};

export default SortResults;
