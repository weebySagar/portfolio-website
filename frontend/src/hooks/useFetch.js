"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetch = (url,options) => {
    const [data,setData]  = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get(url);
                setData(response.data?.data?.attributes)
            } catch (error) {
                setError(error)
            }
            finally{
                setIsLoading(false)
            }
        }
        // try {
        //     axios.get(url).then(response=>setData(response.data.data.attributes));
            
        // } catch (error) {
        //     setError(error)
        // }
        // finally{
        //     setIsLoading(false)
        // }
        fetchData();
    },[url,options]);

  return {data,isLoading,error}
}

export default useFetch