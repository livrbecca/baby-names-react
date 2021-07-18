import React from "react";
import { SearchBarProps } from "../utils/interfaces";

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        placeholder="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
