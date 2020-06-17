import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import ChangeIndicator from "../../components/ChangeIndicator";
import MetaDisplay from "../../components/MetaDisplay";
import useApi from "../../components/useApi";

const CryptoSingle = () => {
  let { id } = useParams();

  const { isLoading, response, error, fetch } = useApi(
    `https://api.coinranking.com/v1/public/coin/${id}?base=GBP&timePeriod=7d`
  );

  // Fetch on mount and start a timer to poll
  useEffect(() => {
    fetch();
    const timer = setInterval(fetch, 3000);
    return () => clearInterval(timer);
  }, [fetch]);

  if (isLoading === true && response === undefined) return <h1>Loading...</h1>;
  if (error) return <h1>An error occured</h1>;

  const { coin } = response.data.data;

  return (
    <article>
      <h1>{coin.name}</h1>
      <MetaDisplay name="Price" value={`${coin.price} ${coin.symbol}`} />
      <MetaDisplay name="Market Cap" value={coin.marketCap} />
      <MetaDisplay
        name="Change"
        children={<ChangeIndicator change={coin.change} />}
      />
      <details open={true}>
        <summary>Coin Description</summary>
        <div dangerouslySetInnerHTML={{ __html: coin.description }} />
      </details>
    </article>
  );
};

export default CryptoSingle;
