import React from "react";
import cx from "classnames";

import styles from "./styles.module.css";

const ChangeIndicator = ({ change }) => (
  <span
    className={cx(styles.text, styles[change < 0 ? "negative" : "positive"])}
  >
    {change}
  </span>
);

export default ChangeIndicator;
