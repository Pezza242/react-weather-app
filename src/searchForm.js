import React from "react";

export default function SearchForm({ onSubmit, onChange }) {
  return (
    <form id="search-form" onSubmit={onSubmit}>
      <input
        className="search-bar"
        type="search"
        placeholder="Enter a city..."
        onChange={onChange}
        required
      />
      <input className="submit" type="submit" value="Search" />
    </form>
  );
}
