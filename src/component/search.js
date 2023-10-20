import React, { useState } from "react";
import ProductList from "../productlist";

function SearchApp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [items] = useState([ProductList]);
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <p>
        {filteredItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </p>
    </div>
  );
}

export default SearchApp;
