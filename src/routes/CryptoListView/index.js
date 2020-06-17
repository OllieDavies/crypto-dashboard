import React, { useState } from "react";
import CryptoList from "../../components/CryptoList";
import OrderDropdown from "../../components/OrderDropdown";

import styles from "./styles.module.css";

const CryptoListView = () => {
  const [currentOrder, setOrder] = useState("desc");

  return (
    <div>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>All Coins</h1>
        <OrderDropdown
          containerClassName={styles.dropdown}
          onChange={setOrder}
          options={{
            desc: "Price: High To Low",
            asc: "Price: Low To High",
          }}
        />
      </div>
      <CryptoList order={currentOrder} />
    </div>
  );
};

export default CryptoListView;
