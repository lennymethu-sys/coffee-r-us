import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(d => {
        setData(d);
        setLoading(false);
      });
  }, [url]);

  return { data, setData, loading };
}

export default useFetch;
