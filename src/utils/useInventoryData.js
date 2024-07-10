import React, {useState, useEffect} from "react";


export const useInventoryData = async () => {
    const [data, setData] = useState({});
    const inventory = Object.values(data);


    useEffect(() => {
        const fetchInventory = async () => {
          const response = await fetch('./data/static/json/inventory.json');
          const json = await response.json();
          setData(json);
        };
    
    
        fetchInventory();
      }, []);

        return inventory;
      
;


}