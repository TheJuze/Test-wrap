import { useAccount, useConnect, useDisconnect } from "wagmi";
import styles from "./Header.module.scss";
import { Button } from "../../../shared/ui";

export const Header = () => {
  const { isConnected, address } = useAccount();

  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  const handleButtonClick = () => {
    if (isConnected) {
      disconnect();
      return;
    }

    connect({ connector: connectors[0] });
  };

  return (
    <header className={styles.root}>
      {isConnected && (
        <p>
          Account: <span className={styles.address}>{address}</span>
        </p>
      )}
      <Button onClick={handleButtonClick}>
        {isConnected ? "Disconnect" : "Connect Wallet"}
      </Button>
    </header>
  );
};
