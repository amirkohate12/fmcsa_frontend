// DataContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a Context for the updated data
const DataContext = createContext();

// Create a Provider Component
export const DataProvider = ({ children }) => {
    const [updatedData, setUpdatedData] = useState([]);

    return (
        <DataContext.Provider value={{ updatedData, setUpdatedData }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook to access the context
export const useData = () => {
    return useContext(DataContext);
};