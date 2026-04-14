import React, { createContext, useState } from "react";
export const AllDataContext = createContext();

const AllDataProvider = ({ children }) => {
  const [callHistory, setCallHistory] = useState([]);
  console.log(callHistory);
  const data = { callHistory, setCallHistory };
  return (
    <AllDataContext.Provider value={data}>{children}</AllDataContext.Provider>
  );
};

export default AllDataProvider;
