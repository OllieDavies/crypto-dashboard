import React from "react";
import cx from "classnames";
import styles from "./styles.module.css";

const OrderDropdown = ({ options, onChange, containerClassName }) => {
  return (
    <select
      data-testid="orderdropdownSelect"
      className={cx(containerClassName, styles.select)}
      onChange={(event) => onChange(event.target.value)}
    >
      {Object.entries(options).map((value) => (
        <option key={value[0]} value={value[0]}>
          {value[1]}
        </option>
      ))}
    </select>
  );
};

export default OrderDropdown;
