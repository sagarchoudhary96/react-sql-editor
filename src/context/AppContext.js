import React from "react";
import { getTablesMockData } from "utils/mockData";

/**
 * Context to manage app state
 * Can be replaced with Redux Store
 */
const AppContext = React.createContext(null);

/**
 * Context Provider to wrap component with AppContext
 * giving access to context Data
 */
export const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        tablesData: getTablesMockData(),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
