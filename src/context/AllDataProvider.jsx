import React, { createContext } from "react";
const AllDataContext = createContext();

const AllDataProvider = ({ children }) => {
  const data = {};
  return (
    <AllDataContext.Provider value={data}>{children}</AllDataContext.Provider>
  );
};

export default AllDataProvider;
