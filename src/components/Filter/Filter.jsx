import React from "react";

const Filter = ({ valey, onChange }) => (
  <input
    name="filter"
    value={valey}
    onChange={onChange}
  />
);

export default Filter;