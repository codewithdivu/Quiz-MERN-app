import { useEffect, useState } from "react";
import { axiosGet } from "../services";

const useMetaData = (apiRoute, payLoad, initial = false) => {
  // States
  const [metaData, setMetaData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  // Effects
  useEffect(() => {
    if (initial) return;
    fetchMetaData(payLoad);
  }, []);

  const fetchMetaData = async (payLoad, queryParam = "", targetParam = "") => {
    setIsFetching(true);

    try {
      const res = await axiosGet(
        queryParam ? apiRoute.replace(targetParam, queryParam) : apiRoute,
        payLoad
      );
      setIsFetching(false);
      if (res.status) {
        setMetaData(res.data);
      }
    } catch (error) {
      setIsFetching(false);
    }
  };

  // Return
  return [metaData, isFetching, fetchMetaData];
};

export default useMetaData;
