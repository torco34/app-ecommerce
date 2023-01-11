import { useState } from "react";

export const Input = ({ search, setSearch }) => {
  const onchange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="text-center mb-3  ">
      <input
        type="text"
        value={search}
        onChange={onchange}
        placeholder="Search "
        className="  rounded"
      />
    </div>
  );
};
