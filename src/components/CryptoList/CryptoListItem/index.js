import React from "react";
import { Link } from "react-router-dom";

import ChangeIndicator from "../../../components/ChangeIndicator";
import styles from "./styles.module.css";

const CryptoListItem = ({ id, name, symbol, price, change }) => (
  <Link to={`./${id}`} className={styles.wrapper} data-testid="list-item-link">
    <div className={styles.container}>
      <div className={styles.nameContainer}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.price}>
          {price} {symbol}
        </p>
      </div>
      <div className={styles.changeContainer}>
        <ChangeIndicator change={change} />
      </div>
    </div>
  </Link>
);

export default CryptoListItem;
