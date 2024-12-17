import { useEffect, useState } from "react";

const useFetchqustions = () => {
  const [qustions, setqustions] = useState([]);
  const [error, setError] = useState(null);

  const fetchqustions = async () => {
    try {
      const response = await fetch("https://legekrogen.webmcdm.dk/questions");
      const data = await response.json();
      console.log(data);
      setqustions(data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } 
  };
  useEffect(() => {
    fetchqustions();
  }, []);

  return {
    qustions,
    error,
  };
};

export { useFetchqustions };
