import { useState, useCallback } from "react";
import { get } from "axios";

export default function useApi(path) {
  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState(undefined);

  const fetch = useCallback(() => {
    setLoading(true);
    get(path)
      .then(setResponse)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [path]);

  return {
    isLoading,
    response,
    error,
    fetch,
  };
}
