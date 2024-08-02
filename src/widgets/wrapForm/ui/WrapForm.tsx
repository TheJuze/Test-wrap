import { useState } from "react";
import arrowDownUpURL from "../../../../public/icons/arrowDownUp.svg?url";

import styles from "./WrapForm.module.scss";
import { InputNumber } from "../../../shared/ui";
import { useWrapEth, useUnwrapEth } from "../api";

export const WrapForm = () => {
  const [isWrap, setIsWrap] = useState(true);

  const [amount, setAmount] = useState("");

  const handleSideChange = () => {
    setIsWrap((prevState) => !prevState);
  };

  const handleWrapEth = useWrapEth(amount);
  const handleUnwrapEth = useUnwrapEth(amount);

  const handleSubmit = () => {
    if (isWrap) {
      handleWrapEth();
      return;
    }

    handleUnwrapEth();
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

      <button type="submit" onClick={handleSubmit}>
        {isWrap ? "Wrap" : "Unwrap"}
      </button>
    </div>
  );
};
