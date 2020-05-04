import React from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchBox = () => {
  return (
    <Search
      placeholder="input search text"
      onSearch={(value) => console.log(value)}
    />
  );
};

export default SearchBox;
