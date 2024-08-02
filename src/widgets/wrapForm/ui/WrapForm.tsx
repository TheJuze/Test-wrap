import { useState } from "react";
import arrowDownUpURL from "../../../../public/icons/arrowDownUp.svg?url";

import styles from "./WrapForm.module.scss";
import { useWrapEth, useUnwrapEth } from "../api";
import { TokenInput } from "../../../entities/tokenInput/ui/TokenInput.tsx";
import { WETH_ADDRESS } from "../../../shared/constants";
import { Button } from "../../../shared/ui";

export const WrapForm = () => {
  const [isWrap, setIsWrap] = useState(true);

  const [amount, setAmount] = useState("");

  const [tokenInAddress, tokenOutAddress] = [
    isWrap ? undefined : WETH_ADDRESS,
    isWrap ? WETH_ADDRESS : undefined,
  ];

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
      <TokenInput
        tokenAddress={tokenInAddress}
        token={isWrap ? "eth" : "weth"}
        label="You pay:"
        value={amount}
        onChange={setAmount}
        placeholder="0"
      />
      <button onClick={handleSideChange} className={styles.swapFieldsBtn}>
        <img src={arrowDownUpURL} alt="arrowDownUp" />
      </button>
      <TokenInput
        token={isWrap ? "weth" : "eth"}
        label="You receive:"
        value={amount}
        onChange={setAmount}
        placeholder="0"
        tokenAddress={tokenOutAddress}
      />

      <Button onClick={handleSubmit} className={styles.submitBtn}>
        {isWrap ? "Wrap" : "Unwrap"}
      </Button>
    </div>
  );
};
