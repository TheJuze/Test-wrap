import { useState } from "react";
import arrowDownUpURL from "../../../../public/icons/arrowDownUp.svg?url";

import styles from "./WrapForm.module.scss";
import { InputNumber } from "../../../shared/ui";

export const WrapForm = () => {
  const [isWrap, setIsWrap] = useState(true);

  const [amount, setAmount] = useState("");

  const handleSideChange = () => {
    setIsWrap((prevState) => !prevState);
  };

  return (
    <div className={styles.root}>
      <InputNumber
        label={isWrap ? "ETH" : "WETH"}
        value={amount}
        onChange={setAmount}
        placeholder="0"
      />
      <button onClick={handleSideChange}>
        <img src={arrowDownUpURL} alt="arrowDownUp" />
      </button>
      <InputNumber
        label={!isWrap ? "ETH" : "WETH"}
        value={amount}
        onChange={setAmount}
        placeholder="0"
      />

      <button type="submit">{isWrap ? "Wrap" : "Unwrap"}</button>
    </div>
  );
};
