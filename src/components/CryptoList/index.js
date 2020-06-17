import React, { useEffect } from "react";

import useApi from "../useApi";
import CryptoListItem from "./CryptoListItem";

const CryptoList = ({ order }) => {
  const { isLoading, response, error, fetch } = useApi(
    `https://api.coinranking.com/v1/public/coins?base=GBP&timePeriod=7d&sort=price&order=${order}`
  );

  // Fetch on mount and start a timer to poll
  useEffect(() => {
    fetch();
    const timer = setInterval(fetch, 3000);
    return () => clearInterval(timer);
  }, [fetch]);

  if (isLoading === true && response === undefined) return <h1>Loading...</h1>;
  if (error) return <h1>An error occured</h1>;

  return (
    <>
      {response.data.data.coins.map((coin) => (
        <CryptoListItem key={coin.id} {...coin} />
      ))}
    </>
  );
};

export default CryptoList;
