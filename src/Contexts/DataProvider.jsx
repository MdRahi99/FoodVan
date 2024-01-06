/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://food-van-server.vercel.app/api/items');
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const addNewItem = (newItem) => {
        setData((prevData) => [...prevData, newItem]);
      };

    const value = { data, loading, error, addNewItem };

    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>;
};

export default DataProvider;