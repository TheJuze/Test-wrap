import styles from "./TokenInput.module.scss";
import { InputNumber } from "../../../shared/ui";
import BigNumber from "bignumber.js";
import { useAccount, useBalance } from "wagmi";
import { formatEther } from "viem";

type TokenInputProps = {
  value: string;
  tokenAddress: `0x${string}` | undefined; // undefined for native token
  onChange?: (value: string) => void;
  token?: string;
  label?: string;
  placeholder?: string;
};

export const TokenInput = ({
  token,
  label,
  value,
  onChange,
  placeholder,
  tokenAddress,
}: TokenInputProps) => {
  const { address } = useAccount();

  const {
    data: tokenData /*, isLoading: isLoadingToken, isError: isErrorToken*/,
  } = useBalance({
    address,
    token: tokenAddress,
  });

  const balance = formatEther(tokenData?.value ?? 0n);

  return (
    <label className={styles.root}>
      <div className={styles.leftCol}>
        {label !== undefined && <span className={styles.label}>{label}</span>}{" "}
        <div className={styles.token}>
          <img
            src={`icons/${token}.png`}
            alt="label"
            className={styles.tokenIcon}
          />
          <span>{token}</span>
        </div>
        <p className={styles.balance}>
          {" "}
          Balance: {BigNumber(balance).toFixed(4)}
        </p>
      </div>
      <InputNumber
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};
