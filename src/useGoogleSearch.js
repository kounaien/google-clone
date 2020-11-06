import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "1bbebc318731edff5";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://www.googleapis.com/customsearch/v1?[parameters]");
    };
  }, [term]);

  return { data };
};

export default useGoogleSearch;
