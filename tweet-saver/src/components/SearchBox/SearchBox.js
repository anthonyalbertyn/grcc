import React from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchBox = ({ onSearchCallback }) => {
  const handleOnSearch = (value) => {
    onSearchCallback(value);
  };
  return (
    <Search
      placeholder="Search Twitter"
      onSearch={(value) => handleOnSearch(value)}
      className="search-box"
    />
  );
};

export default SearchBox;
